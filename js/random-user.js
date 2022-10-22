// 6. load user data from "randomuser.me" and show the user name, user photo and full location (street, city, coordinates, timezone) after loading the data


const loadUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
        .catch(error => console.log(error))
}

const displayUser = user => {
    // console.log(user);
    const userContainer = document.getElementById('user-container');
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `
            <div class="card mx-auto" style="width: 30vw;">
                <img src="${user.picture.large}" class="card-img-top" alt="...">
                <div class="card-header bg-primary text-white">
                    Name: <strong>${user.name.title} ${user.name.first} ${user.name.last}</strong>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">City: ${user.location.city}</li>
                    <li class="list-group-item">State: ${user.location.state}</li>
                    <li class="list-group-item">Country: ${user.location.country}</li>
                    <li class="list-group-item">Postcode: ${user.location.postcode}</li>
                    <li class="list-group-item">Coordinates: "${user.location.coordinates.latitude}", "${user.location.coordinates.longitude}"</li>
                </ul>
            </div>
    `;
    userContainer.appendChild(userDiv);
}

loadUser();
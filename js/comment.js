// 1. fetch comments from jsonplaceholder website API and console the result
// 2. load data and show the result on html after cliking a button
// 3. load data and show the result automatically when page got reloaded
// 4. see if you can use arrow function properly and check if you can use forEach when performing loop
// 5. load the respective post while clicking on the comment div or a button using dynamic template sring with the help of postId & API. then show the post on the website

const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

const displayComments = comments => {
    const commentsContainer = document.getElementById('comments-container');
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        const postHTMLId = `post-container-${comment.postId}`;
        commentDiv.innerHTML = `
            <div id="${postHTMLId}"></div>
            <p>Comment: ${comment.body}</p>
            <p>Comment By: ${comment.name}</p>
            <button onclick="loadPost(${comment.postId}, '${postHTMLId}')">Load Full Post</button>
        `;
        commentsContainer.appendChild(commentDiv);
        console.log(postHTMLId);
    });
}

const loadPost = (postAPIId, postHTMLId) => {
    const postURL = `https://jsonplaceholder.typicode.com/posts/${postAPIId}`;
    fetch(postURL)
        .then(res => res.json())
        .then(post => displayPost(post, postHTMLId))
}

const displayPost = (post, postHTMLId) => {
    const postContainer = document.getElementById(postHTMLId);
    const postDiv = document.createElement('div');
    postDiv.classList.add('post')
    postDiv.innerHTML = `
        <h3>Post Title: ${post.title}</h3>
        <p>Post: ${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
}

// loadComments();
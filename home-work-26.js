function getPostById(postId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if (response.status !== 200) {
                    reject('Error: Post not found');
                }
                return response.json();
            })
            .then(post => resolve(post))
            .catch(error => reject('Error'));
    });
}

function displayPost(post) {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = `
    <div class="postContent">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button id="commentsButton">Get Comments</button>
    </div>
  `;
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
    const postIdInput = document.getElementById('postIdInput');
    const postId = parseInt(postIdInput.value);

    if (isNaN(postId) || postId < 1 || postId > 100) {
        alert('Error: Invalid ID');
        return;
    }

    getPostById(postId)
        .then(post => displayPost(post))
        .catch(error => alert(error.message));
});

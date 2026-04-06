
const posts = [
    {title: "First Post", description: "This is my first post"},
    {title: "Second Post", description: "This is my second post"}
]

const createPosts = (post, getPostsCallback) => {
    setTimeout(() => {
        posts.push(post);
        getPostsCallback();
    }, 2000)
}

const getPosts = () => {
    setTimeout(() => {
        let output = "";
        posts.forEach(post => {
           output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

createPosts({title: "Third Post", description: "This is my third post"}, getPosts);
getPosts();

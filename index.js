const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainElement = document.getElementById("main");
const postElement = document.getElementById("post");
const postsHtml = [];

posts.forEach((post) => {
  postsHtml.push(`
        <section class="post">
        <article class="post-header">
            <img src="${post.avatar}" alt="${post.name}" class="avatar" />
            <div class="post-info">
            <h2>${post.name}</h2>
            <p>${post.location}</p>
            </div>
        </article>
        <img src="${post.post}" alt="${post.name}" class="post-image" />
        <p class="comment">${post.comment}</p>
        <p class="likes">${post.likes} likes</p>
        </section>
    `);
});
mainElement.innerHTML = postsHtml.join("");

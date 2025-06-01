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

posts.forEach((post, index) => {
  postsHtml.push(`
        <section class="post">
          <article class="post-header">
              <img src="${post.avatar}" alt="${post.name}" class="user-avatar" />
              <div class="post-info">
              <h2>${post.name}</h2>
              <p>${post.location}</p>
              </div>
          </article>
          <div class="image-wrapper">
            <img src="${post.post}" alt="${post.name}" class="image" />
          </div>
          <article class="post-footer">
              <div class="post-footer-item">
                  <img src="images/icon-heart.png" alt="heart icon" class="icon heart-icon" data-index="${index}" />
                  <img src="images/icon-comment.png" alt="comment icon" class="icon" />
                  <img src="images/icon-dm.png" alt="dm icon" class="icon" />
              </div>
              <p class="post-footer-item likes-count"><strong>${post.likes} likes</strong></p>
              <p class="post-footer-item"><strong>${post.username}</strong> ${post.comment}</p>
          </article>
        </section>
    `);
});
mainElement.innerHTML = postsHtml.join("<hr class='divider' />");

document.querySelectorAll(".heart-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    console.log("Heart icon clicked");
    const index = this.getAttribute("data-index");
    posts[index].likes++;
    // Update only the likes count for this post
    const postSection = this.closest(".post");
    const likesCount = postSection.querySelector(".likes-count strong");
    likesCount.textContent = `${posts[index].likes} likes`;
  });
});

export default function Story(story) {
  return `
  <div class="story">
    <div>
      <span class="gray">${story.index}.</span>
      <span class="upvote">▲</span>
      <a href="${story.url}">${story.title}</a>
      <a href="https://${story.domain}" target="_blank" class="story-domain">(${story.domain})</a>
    </div>
    <div>
      <div class="gray">
        ${story.points} points by ${story.user} ${story.time_ago}
        |
        <a href="#/item?id=${story.id}">
          ${story.comments_count} comments
        </a>
        |
        <a class="favorite">
          <i class="fa-regular fa-star"></i>
          Add to Favorites
        </a>
      </div>
    </div>
  </div>`;
}

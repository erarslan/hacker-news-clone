import view from "../utils/view.js";
import Story from "../components/Story.js";
import base from "../utils/baseUrl.js";

export default async function item() {
  try {
    const story = await getStory();
    const hasComments = story.comments.length > 0;
    view.innerHTML = `
  <div>
    ${Story(story)}
  </div>
  <hr>
  ${
    hasComments
      ? story.comments.map((comment) => JSON.stringify(comment)).join("")
      : "No comments."
  }  
  `;
  } catch (e) {
    console.error(e);
    view.innerHTML = `<div class="error">Error: Fetching Story</div>`;
  }
}

async function getStory() {
  const storyId = window.location.hash.split("?id=")[1];

  const response = await fetch(`${base}/item/${storyId}`);
  const story = await response.json();
  return story;
}

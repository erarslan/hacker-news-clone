import view from "../utils/view.js";
import Story from "../components/Story.js";
import base from "../utils/baseUrl.js";

export default async function stories(path) {
  const stories = await getStories(path);
  const hasStories = stories.length > 0;

  view.innerHTML = `<div>
    ${
      hasStories
        ? stories.map((story, i) => Story({ ...story, index: i + 1 })).join("")
        : "No data found."
    }  
  </div>`;
}

async function getStories(path) {
  switch (path) {
    case "/":
      path = "/news";
      break;
    case "/new":
      path = "/newest";
      break;
  }

  const response = await fetch(`${base}${path}`);
  const stories = await response.json();
  return stories;
}

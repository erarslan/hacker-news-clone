import view from "../utils/view.js";
import Story from "../components/Story.js";
import base from "../utils/baseUrl.js";
import store from "../store.js";
import checkFavorite from "../utils/checkFavorite.js";

export default async function Stories(path) {
  const { favorites } = store.getState();
  console.log(favorites);

  const stories = await getStories(path);
  const hasStories = stories.length > 0;

  view.innerHTML = `<div>
    ${
      hasStories
        ? stories
            .map((story, i) =>
              Story({
                ...story,
                index: i + 1,
                isFavorite: checkFavorite(favorites, story),
              })
            )
            .join("")
        : "No data found."
    }  
  </div>`;

  document.querySelectorAll(".favorite").forEach((favButton) => {
    favButton.addEventListener("click", async function () {
      const story = JSON.parse(this.dataset.story);
      const isFavorite = checkFavorite(favorites, story);

      store.dispatch({
        type: `${isFavorite ? "REMOVE" : "ADD"}_FAVORITE`,
        payload: { favorite: story },
      });

      await Stories(path);
    });
  });
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

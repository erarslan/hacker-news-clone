import view from "../utils/view.js";
import checkFavorite from "../utils/checkFavorite.js";
import store from "../store.js";
import Story from "../components/Story.js";

export default function Favorites() {
  const { favorites } = store.getState();
  localStorage.setItem("favs", JSON.stringify(favorites));
  const hasFavorites = favorites.length > 0;
  view.innerHTML = `
  <div>
  ${
    hasFavorites
      ? favorites
          .map((favorite, i) =>
            Story({
              ...favorite,
              index: i + 1,
              isFavorite: checkFavorite(favorites, favorite),
            })
          )
          .join("")
      : "Add some Favorites."
  }
  </div>`;

  document.querySelectorAll(".favorite").forEach((favButton) => {
    favButton.addEventListener("click", function () {
      const story = JSON.parse(this.dataset.story);
      const isFavorite = checkFavorite(favorites, story);

      store.dispatch({
        type: `${isFavorite ? "REMOVE" : "ADD"}_FAVORITE`,
        payload: { favorite: story },
      });

      Favorites();
    });
  });
}

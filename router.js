import Stories from "./pages/stories.js";
import item from "./pages/item.js";
import Favorites from "./pages/favorites.js";

const router = new Navigo(null, true, "#");

export default class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      {
        path: "/",
        page: Stories,
      },
      {
        path: "/new",
        page: Stories,
      },
      {
        path: "/ask",
        page: Stories,
      },
      {
        path: "/show",
        page: Stories,
      },
      {
        path: "/favorites",
        page: Favorites,
      },
      {
        path: "/item",
        page: item,
      },
    ];

    routes.forEach(({ path, page }) => {
      router
        .on(path, () => {
          page(path);
        })
        .resolve();
    });
  }
}

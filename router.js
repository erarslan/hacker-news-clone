import stories from "./pages/stories.js";
import item from "./pages/item.js";

const router = new Navigo(null, true, "#");

export default class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      {
        path: "/",
        page: stories,
      },
      {
        path: "/new",
        page: stories,
      },
      {
        path: "/ask",
        page: stories,
      },
      {
        path: "/show",
        page: stories,
      },
      {
        path: "/favorites",
        page: stories,
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

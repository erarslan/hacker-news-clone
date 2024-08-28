function createStore(reducer) {
  let currentState = reducer(undefined, {});

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducer(currentState, action);
    },
  };
}

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favs")) || [],
};

function favoritesReducer(state = initialState, action) {
  let favorites;

  switch (action.type) {
    case "ADD_FAVORITE":
      const addedFavorite = action.payload.favorite;
      favorites = [...state.favorites, addedFavorite];
      return { favorites };
    case "REMOVE_FAVORITE":
      const removedFavorite = action.payload.favorite;
      favorites = state.favorites.filter(
        (favorite) => favorite.id !== removedFavorite.id
      );
      return { favorites };
    default:
      return state;
  }
}

const store = createStore(favoritesReducer);

export default store;

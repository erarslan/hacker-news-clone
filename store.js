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
  favorites: [],
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

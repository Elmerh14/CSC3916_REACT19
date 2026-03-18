import constants from '../constants/actionTypes'

let initialState = {
      movies: [],
      selectedMovie: null
}

function coerceMovieList(payload) {
      if (Array.isArray(payload)) return payload;
      return [];
}

const movieReducer = (state = initialState, action) => {
      let updated = Object.assign({}, state);

      switch(action.type) {
            case constants.FETCH_MOVIES:
                  updated['movies'] = coerceMovieList(action.movies);
                  updated['selectedMovie'] = updated.movies[0] || null;
                  return updated;
            case constants.SET_MOVIE:
                  updated['selectedMovie'] = action.selectedMovie;
                  return updated;
            case constants.FETCH_MOVIE:
                  updated['selectedMovie'] = action.selectedMovie;
                  return updated;
            default:
                  return state;
      }
}

export default movieReducer;

import MovieActionTypes from './movie.types';

const INITIAL_STATE = {
  movies: [],
  addErrors: '',
  movieDetails: null, 
  movieDetailsLoading: false, 
}

export const MovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieActionTypes.ADD_MOVIE_FAILURE:
      return {
        ...state, 
        addErrors: action.payload
      }
    case MovieActionTypes.FETCH_MOVIES_SUCCESS: 
      return {
        ...state, 
        movies: action.payload
      }
    case MovieActionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state, 
        movieDetails: action.payload, 
        movieDetailsLoading: false
      }
    case MovieActionTypes.FETCH_MOVIE_FAILURE:
      return {
        ...state, 
        movieDetails: null, 
        movieDetailsLoading: false
      }
    case MovieActionTypes.FETCH_MOVIE_START:
      return {
        ...state, 
        movieDetails: null, 
        movieDetailsLoading: true
      }
    default:
      return state;
  }
}

export default MovieReducer;
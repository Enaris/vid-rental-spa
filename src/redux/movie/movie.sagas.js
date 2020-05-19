import { call, all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'react-router-redux';

import MovieActionTypes from './movie.types';
import staticUrls, { getMovieUrl, updateMovieUrl } from '../api/api.urls';

import {
  addMovieSuccess,
  addMovieFailure,
  fetchMovieSuccess,
  fetchMovieFailure,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  updateMovieSuccess, 
  updateMovieFailure
} from './movie.actions';


export function* updateMovie({ payload }) {
  try {
    const formData = new FormData();
    if (payload.newImages) {
      payload.newImages.forEach(i => {
        formData.append('newImages', i);
      });
    }
    if (payload.newCover) {
      formData.append('newCover', payload.newCover)
    }
    if (payload.removedImages) {
      payload.removedImages.forEach(ri => {
        formData.append('removedImages', ri);
      });
    }
    formData.append('title', payload.title);
    formData.append('director', payload.director);
    formData.append('description', payload.description);
    formData.append('id', payload.id);

    const config = { headers: { 'Content-Type': 'multipart/form-data' }};
    const response = yield call(axios.post, updateMovieUrl(payload.id), formData, config);
    response.data.succeeded
      ? yield put(updateMovieSuccess())
      : yield put(updateMovieFailure(response.errors))
  }
  catch (errors) {
    yield put(updateMovieFailure(errors));
  }
}

export function* addMovie({ payload }) {
  try {
    const response = yield call(axios.post, staticUrls.addMovie, payload);
    if (response.data.succeeded) {
      yield put(addMovieSuccess(response.data.data));
      push('/employee/movies');
    }
    else {
      yield put(addMovieFailure(response.errors))
    }
  }
  catch (errors) {
    yield put(addMovieFailure(errors));
  }
}

export function* fetchMovies() {
  try {
    const response = yield call(axios.get, staticUrls.movies);
    response.data.succeeded
    ? yield put(fetchMoviesSuccess(response.data.data))
    : yield put(fetchMoviesFailure(response.data.errors))
  }
  catch (error) {
    yield put(fetchMoviesFailure(error.response.data));
  }
}

export function* fetchMovie({ payload }) {
  try {
    const response = yield call(axios.get, getMovieUrl(payload));
    response.data.succeeded
    ? yield put(fetchMovieSuccess(response.data.data))
    : yield put(fetchMovieFailure(response.data.errors))
  }
  catch (error) {
    yield put(fetchMovieFailure(error.response.data));
  }
}

export function* onUpdateMovieStart() {
  yield takeLatest(MovieActionTypes.UPDATE_MOVIE_START, updateMovie);
}

export function* onAddMovieStart() {
  yield takeLatest(MovieActionTypes.ADD_MOVIE_START, addMovie);
}

export function* onFetchMoviesStart() {
  yield takeLatest(MovieActionTypes.FETCH_MOVIES_START, fetchMovies);
}

export function* onFetchMovieStart() {
  yield takeLatest(MovieActionTypes.FETCH_MOVIE_START, fetchMovie)
}

export default function* MovieSagas() {
  yield all([
    call(onAddMovieStart),
    call(onFetchMoviesStart), 
    call(onFetchMovieStart), 
    call(onUpdateMovieStart)
  ])
}
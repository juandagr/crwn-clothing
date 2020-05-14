/**
 * Sagas imports
 * take -> listen for one action type and run some procces
 * takeEvery -> listen for every action type and dispatch a function
 * takeLatest -> Listen for the latest action tyoe and dispatch a function (last update in this case)
 * call -> call async functions (function, params)
 * put -> create actions calls
 */
import { takeLatest, call, all, put } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

/**
 * This function get fired when the action type "FETCH_COLLECTIONS_START" will be called
 */
export function* fetchCollectionsAsync() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

/**
 * This function listen for fetchCollectionsAsync action and dispatch fetchCollectionsAsync funtion in response.
 * This function should be called in the sagas middleware in the store file
 */
export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}

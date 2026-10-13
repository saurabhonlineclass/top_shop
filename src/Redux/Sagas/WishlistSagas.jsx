import { put, takeEvery } from "redux-saga/effects"
import { CREATE_WISHLIST, CREATE_WISHLIST_RED, DELETE_WISHLIST, DELETE_WISHLIST_RED, GET_WISHLIST, GET_WISHLIST_RED, UPDATE_WISHLIST, UPDATE_WISHLIST_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./APICallingService/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./APICallingService/index"

function* createSaga(action) {                                                  //Worker Saga
    let response = yield createRecord("wishlist", action.payload)
    // let response = yield createMultipartRecord("wishlist", action.payload)
    yield put({ type: CREATE_WISHLIST_RED, payload: response })
}

function* getSaga(action) {
    let response = yield getRecord("wishlist")
    yield put({ type: GET_WISHLIST_RED, payload: response })
}

function* updateSaga(action) {                                                  //Worker Saga
    yield updateRecord("wishlist", action.payload)
    yield put({ type: UPDATE_WISHLIST_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("wishlist", action.payload)
    // yield put({ type: UPDATE_WISHLIST_RED, payload: response })
}

function* deleteSaga(action) {                                                  //Worker Saga
    yield deleteRecord("wishlist", action.payload)
    yield put({ type: DELETE_WISHLIST_RED, payload: action.payload })
}


export default function* WishlistSagas() {
    yield takeEvery(CREATE_WISHLIST, createSaga)                        //Watchers
    yield takeEvery(GET_WISHLIST, getSaga)                              //Watchers
    yield takeEvery(UPDATE_WISHLIST, updateSaga)                        //Watchers
    yield takeEvery(DELETE_WISHLIST, deleteSaga)                        //Watchers
}
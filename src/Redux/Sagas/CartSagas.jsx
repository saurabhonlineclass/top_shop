import { put, takeEvery } from "redux-saga/effects"
import { CREATE_CART, CREATE_CART_RED, DELETE_CART, DELETE_CART_RED, GET_CART, GET_CART_RED, UPDATE_CART, UPDATE_CART_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./APICallingService/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./APICallingService/index"

function* createSaga(action) {                                                  //Worker Saga
    let response = yield createRecord("cart", action.payload)
    // let response = yield createMultipartRecord("cart", action.payload)
    yield put({ type: CREATE_CART_RED, payload: response })
}

function* getSaga(action) {
    let response = yield getRecord("cart")
    yield put({ type: GET_CART_RED, payload: response })
}

function* updateSaga(action) {                                                  //Worker Saga
    yield updateRecord("cart", action.payload)
    yield put({ type: UPDATE_CART_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("cart", action.payload)
    // yield put({ type: UPDATE_CART_RED, payload: response })
}

function* deleteSaga(action) {                                                  //Worker Saga
    yield deleteRecord("cart", action.payload)
    yield put({ type: DELETE_CART_RED, payload: action.payload })
}


export default function* CartSagas() {
    yield takeEvery(CREATE_CART, createSaga)                        //Watchers
    yield takeEvery(GET_CART, getSaga)                              //Watchers
    yield takeEvery(UPDATE_CART, updateSaga)                        //Watchers
    yield takeEvery(DELETE_CART, deleteSaga)                        //Watchers
}
import { put, takeEvery } from "redux-saga/effects"
import { CREATE_FEATURE, CREATE_FEATURE_RED, DELETE_FEATURE, DELETE_FEATURE_RED, GET_FEATURE, GET_FEATURE_RED, UPDATE_FEATURE, UPDATE_FEATURE_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./APICallingService/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./APICallingService/index"

function* createSaga(action) {                                                  //Worker Saga
    let response = yield createRecord("feature", action.payload)
    // let response = yield createMultipartRecord("feature", action.payload)
    yield put({ type: CREATE_FEATURE_RED, payload: response })
}

function* getSaga(action) {
    let response = yield getRecord("feature")
    yield put({ type: GET_FEATURE_RED, payload: response })
}

function* updateSaga(action) {                                                  //Worker Saga
    yield updateRecord("feature", action.payload)
    yield put({ type: UPDATE_FEATURE_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("feature", action.payload)
    // yield put({ type: UPDATE_FEATURE_RED, payload: response })
}

function* deleteSaga(action) {                                                  //Worker Saga
    yield deleteRecord("feature", action.payload)
    yield put({ type: DELETE_FEATURE_RED, payload: action.payload })
}


export default function* FeatureSagas() {
    yield takeEvery(CREATE_FEATURE, createSaga)                        //Watchers
    yield takeEvery(GET_FEATURE, getSaga)                              //Watchers
    yield takeEvery(UPDATE_FEATURE, updateSaga)                        //Watchers
    yield takeEvery(DELETE_FEATURE, deleteSaga)                        //Watchers
}
import { put } from "redux-saga/effects";
import * as ChatActionCreators from "../actions/chatActionCreators";
import * as API from "../api";

export function* getMessagesSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.getMessages();
    yield put(ChatActionCreators.getMessagesSuccess(data));
  } catch (error) {
    yield put(ChatActionCreators.getMessagesError(error));
  }
}

export function* createMessageSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.createMessage(action.payload.message);
    yield put(ChatActionCreators.createMessageSuccess(data));
  } catch (error) {
    yield put(ChatActionCreators.createMessageError(error));
  }
}

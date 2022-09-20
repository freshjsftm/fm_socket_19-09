import ACTION_TYPES from "./";

export const getMessagesRequest = ()=>({
  type: ACTION_TYPES.GET_MESSAGES_REQUEST,
})

export const getMessagesSuccess = (messages)=>({
  type: ACTION_TYPES.GET_MESSAGES_SUCCESS,
  payload: {messages}
})

export const getMessagesError = (error)=>({
  type: ACTION_TYPES.GET_MESSAGES_ERROR,
  payload: {error}
})

export const createMessageRequest = (message)=>({
  type: ACTION_TYPES.GET_MESSAGES_REQUEST,
  payload: {message}
})

export const createMessageSuccess = (message)=>({
  type: ACTION_TYPES.GET_MESSAGES_SUCCESS,
  payload: {message}
})

export const createMessageError = (error)=>({
  type: ACTION_TYPES.GET_MESSAGES_ERROR,
  payload: {error}
})
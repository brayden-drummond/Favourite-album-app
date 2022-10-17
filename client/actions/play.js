import { getPlayContent } from '../apis/play'

export const SET_PLAY_CONTENT = 'SET_PLAY_CONTENT'
export const DELETE_PLAY_CONTENT = 'DELETE_PLAY_CONTENT'

export function setPlayContent(playContent) {
  return {
    type: SET_PLAY_CONTENT,
    payload: playContent,
  }
}

export function deletePlayContent(playContentId) {
  return {
    type: DELETE_PLAY_CONTENT,
    payload: playContentId,
  }
}

export function fetchPlayContent(token) {
  return (dispatch) => {
    return getPlayContent(token)
      .then((playContent) => {
        dispatch(setPlayContent(playContent))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}

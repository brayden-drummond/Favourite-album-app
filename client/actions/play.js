import { getPlayContent } from '../apis/play'

export const SET_PLAY_CONTENT = 'SET_PLAY_CONTENT'

export function setPlayContent(playContent) {
  return {
    type: SET_PLAY_CONTENT,
    payload: playContent,
  }
}

export function fetchPlayContent() {
  return (dispatch) => {
    return getPlayContent()
      .then((playContent) => {
        dispatch(setPlayContent(playContent))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}

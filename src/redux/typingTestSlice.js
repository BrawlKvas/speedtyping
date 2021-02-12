import { createSlice } from "@reduxjs/toolkit";
import { TextApi } from "../services/api";

const initialState = {
  text: null,
  position: 0,
  isWrong: false,
  wrongCounter: 0,
  launchPoint: null,
  speed: 0,

  isFinished: false
}

const typingTestSlice = createSlice({
  name: 'typingTest',
  initialState,

  reducers: {
    resetToZero: () => initialState ,

    setText: (state, { payload }) => { state.text = payload },

    enterChar: (state, { payload }) => {
      if (state.launchPoint === null)
        state.launchPoint = new Date()

      if (payload === state.text[state.position]) {
        state.position += 1
        state.isWrong = false
      } else {
        if (state.isWrong)
          return
        state.isWrong = true
        state.wrongCounter += 1
      }

      if (state.position === state.text.length)
        state.isFinished = true
    },

    enterBackspace: (state) => { if (state.isWrong) state.isWrong = false },

    setSpeed: (state, { payload }) => { state.speed = payload }
  }
})

export default typingTestSlice.reducer

export const { resetToZero, setText, enterChar, enterBackspace, setSpeed } = typingTestSlice.actions

export const startTest = () => (dispatch) => {
  dispatch(resetToZero())

  TextApi.getText(1)
    .then(data => dispatch(setText(data)))
}
import { configureStore } from "@reduxjs/toolkit"
import showPassSliceReducer from "../lib/features/uiSlice/uiSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: showPassSliceReducer,
    },
  })
}
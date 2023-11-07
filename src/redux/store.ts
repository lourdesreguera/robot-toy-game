import { configureStore } from '@reduxjs/toolkit'
import cellSlice from './reducers/cellSlice'

export const store = configureStore({
  reducer: {
    cell: cellSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

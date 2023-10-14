import { configureStore } from '@reduxjs/toolkit'
import { typicodeApi } from '../services/api'
import { setupListeners } from '@reduxjs/toolkit/query'
import postReducer from './slices/slicePost'

export const store = configureStore({
  reducer: {
    [typicodeApi.reducerPath]: typicodeApi.reducer,
    slicePost: postReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([typicodeApi.middleware])
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>

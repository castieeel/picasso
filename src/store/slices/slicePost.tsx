import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface iPost {
  postId: number
  postTitle: string
  postBody: string
}

const initialState: iPost = {
  postId: localStorage.getItem('postId') !== null ? parseInt(localStorage.getItem('postId') as string) : 0,
  postTitle: localStorage.getItem('postTitle') !== null ? localStorage.getItem('postTitle') as string : '',
  postBody: localStorage.getItem('postBody') !== null ? localStorage.getItem('postBody') as string : ''
}

export const slicePost = createSlice({
  name: 'slicePost',
  initialState,
  reducers: {
    setPostId: (state, action: PayloadAction<number>) => ({
      ...state,
      postId: action.payload
    }),
    setPostTitle: (state, action: PayloadAction<string>) => ({
      ...state,
      postTitle: action.payload
    }),
    setPostBody: (state, action: PayloadAction<string>) => ({
      ...state,
      postBody: action.payload
    })
  }
})

export const { setPostId, setPostTitle, setPostBody } = slicePost.actions
export default slicePost.reducer

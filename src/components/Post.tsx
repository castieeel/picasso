import React from 'react'
import { type iPost } from '../models'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setPostBody, setPostId, setPostTitle } from '../store/slices/slicePost'
import * as S from '../styled components/post.style'

interface iProps {
  post: iPost
}

export const Post: React.FC<iProps> = ({ post }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = (id: number, title: string, body: string): void => {
    localStorage.setItem('postId', id.toString())
    localStorage.setItem('postTitle', title)
    localStorage.setItem('postBody', body)
    dispatch(setPostId(id))
    dispatch(setPostTitle(title))
    dispatch(setPostBody(body))
    navigate('postInfo')
  }

  return (
  <S.Card>
    <S.Title>{`${post.id}. `}{post.title}</S.Title>
    <S.BtnDiv><S.Button onClick={() => { handleClick(post.id, post.title, post.body) }}>Просмотр</S.Button></S.BtnDiv>
  </S.Card>
  )
}

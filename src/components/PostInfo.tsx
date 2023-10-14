import React from 'react'
import { useGetCommentsQuery } from '../services/api'
import { useNavigate } from 'react-router'
import { type iComments } from '../models'
import * as S from '../styled components/postInfo.style'
import { useSelector } from 'react-redux'
import { type RootState } from '../store/store'

export const PostInfo: React.FC = () => {
  const navigate = useNavigate()
  const postId = useSelector((state: RootState) => (state.slicePost.postId))
  const postTitle = useSelector((state: RootState) => (state.slicePost.postTitle))
  const postBody = useSelector((state: RootState) => (state.slicePost.postBody))
  const { data: comments } = useGetCommentsQuery(postId)

  const navigateToMain = (): void => {
    navigate('/')
    localStorage.clear()
  }

  return (
    <>
    <S.DivButton><S.Button onClick={navigateToMain}>Назад</S.Button></S.DivButton>
    <S.Top>
      <S.Post>Заголовок поста</S.Post>
      <S.PostTitle>{postTitle}</S.PostTitle>
      <S.Post>Содержание поста</S.Post>
      <S.BorderBody><S.PostBody>{postBody}</S.PostBody></S.BorderBody>
    </S.Top>

    <S.Container>
    <S.Title>Комментарии</S.Title>
      {comments?.map((comment: iComments) => <S.Comments key={comment.id}>
        <S.Email>{comment.email}</S.Email>
        <S.Body>{comment.body}</S.Body>
      </S.Comments>)}
    </S.Container></>
  )
}

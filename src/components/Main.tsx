import React, { useEffect, useState } from 'react'
import { useLazyGetPostsQuery } from '../services/api'
import { type iPost } from '../models'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Post } from './Post'
import * as S from '../styled components/main.style'

export const Main: React.FC = () => {
  const [start, setStart] = useState(0)
  const [fetchData] = useLazyGetPostsQuery()
  const [records, setRecords] = useState<iPost[]>([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    fetchRecords()
  }, [])

  const fetchRecords = (): void => {
    void fetchData({ start }).unwrap().then((posts) => {
      if (posts != null) {
        setRecords([...records, ...posts])
        setStart(start + 10) // 10 лимитных записей
        setHasMore(posts.length > 0)
      }
    })
  }

  return (
    <>
      <InfiniteScroll dataLength={records.length} next={fetchRecords} hasMore={hasMore}
        loader={<S.Loader><S.PLdr>Loading...</S.PLdr></S.Loader>}>
        <S.Main>
          <S.Title>Тестовое задание для Пикассо</S.Title>
            <S.Container>
                {records?.map((post: iPost) => <Post post={post} key={post.id}/>)}
            </S.Container>
        </S.Main>
      </InfiniteScroll>
    </>
  )
}

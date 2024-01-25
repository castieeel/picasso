import React from 'react'
import { AutoSizer, List } from 'react-virtualized'
import { useGetPostsQuery } from '../services/api'
import { Post } from './Post'
import * as S from '../styled components/main.style'

export const Main: React.FC = () => {
  const { data: records } = useGetPostsQuery(null)

  return (
    <>
    <div style={{ width: '100%', height: '100vh' }}>
      <AutoSizer>
        {({ width, height }) => (
          <List
          width={width}
          height={height}
          rowHeight={100}
          rowCount={(records != null) ? records.length : 0}
          rowRenderer={({ key, index, style }) => {
            const record = records?.[index]
            return record != null
              ? (<S.Container key={key} style={style}> <Post post={record} /> </S.Container>)
              : null
          } } />
        )}
      </AutoSizer>
    </div></>
  )
}

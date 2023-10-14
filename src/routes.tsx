import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageMain } from './pages/Main'
import { PageNotFound } from './pages/NotFound'
import { PagePostInfo } from './pages/PostInfo'

export const AppRoutes: React.FC = () => {
  return (
        <Routes>
            <Route path='/' element={<PageMain/>}/>
            <Route path='*' element= {<PageNotFound/>}/>
            <Route path='postInfo' element= {<PagePostInfo/>}/>
        </Routes>
  )
}

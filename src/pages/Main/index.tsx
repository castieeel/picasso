import React from 'react'
import { Main } from '../../components/Main'
import { ScrollRestoration } from 'react-router-dom'

export const PageMain: React.FC = () => {
  <ScrollRestoration
  getKey={(location, matches) => {
    return location.pathname
  }}
/>
  return (
        <Main/>
  )
}

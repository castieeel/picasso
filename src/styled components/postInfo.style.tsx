import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`
export const BorderBody = styled.div`
    width: 500px;
    padding-bottom: 5px;
`

export const Post = styled.h2`
    line-height: 1.5;
    letter-spacing: 2px;
    font-size: 16px;
    color: #453f42;
`
export const PostTitle = styled.h1`
    line-height: 1.5;
    letter-spacing: 2px;
    font-size: 18px;
    color: #004875;
`

export const PostBody = styled.p`
    line-height: 1.5;
    letter-spacing: 2px;
    font-size: 14px;
    text-align: center;
`

export const Title = styled.h2`
    line-height: 1.5;
    letter-spacing: 2px;
    font-size: 16px;
    color: #EA4C89;
`

export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 500px;
`
export const Email = styled.h3`
    line-height: 1.5;
    letter-spacing: 2px;
    font-size: 16px;
`

export const DivButton = styled.div`
    padding-left: 20px;
`
export const Body = styled.p`
    line-height: 1.5;
    letter-spacing: 2px;
    font-size: 14px;
`

export const Button = styled.div`
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
&:hover,
&:focus {
  background-color: #F082AC;
}
`

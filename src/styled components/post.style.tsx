import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, .25);
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
    align-items: flex-start;
    width: 600px;
    justify-content: space-between;
  `

export const CardFooter = styled.p`
    font-size: 0.65em;
    color: #446;
  `

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FAFAFA;
`
export const Button = styled.button`
  padding: 10px 30px;
  background: none;
  border: none;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;

&:after, 
&:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 2px solid #000;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}
&:after {
  -webkit-transform: translate(3px, 3px);
          transform: translate(3px, 3px);
}
&:before {
  -webkit-transform: translate(-3px, -3px);
          transform: translate(-3px, -3px);
}
&:hover:after,
&:hover:before {
  -webkit-transform: translate(0);
          transform: translate(0);
}
`
export const Title = styled.p`
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    letter-spacing: 2px;
    font-size: 14px;
`

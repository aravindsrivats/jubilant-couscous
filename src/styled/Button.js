import styled from '@emotion/styled'

const StartButton = styled.button`
border: 0;
outline: 0;
width: 100%;
height: 40px;
background: #53B08F;
color: #FFFFFF;
text-transform: uppercase;
border-radius: 3px;
box-shadow: 0px 3px 3px #B4B4B4;
margin-bottom: 5px;
cursor: pointer;
`

const CancelButton = styled.button`
border: 0;
outline: 0;
width: 100%;
color: #53B08F;
font-weight: 500;
margin-top: 15px;
cursor: pointer;
`

const SecondaryButton = styled.button`
border: 2px solid #53B08F;
outline: 0;
width: 100%;
height: 40px;
background: transparent;
color: #53B08F;
text-transform: uppercase;
border-radius: 3px;
margin-bottom: 5px;
cursor: pointer;
`

const TextLink = styled.div`
  color: #53B08F;
  margin-top: -20px;
  font-weight: 500;
  margin-bottom: 35px;
  cursor: pointer;
`

export { StartButton, CancelButton, SecondaryButton, TextLink }
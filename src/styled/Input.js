import styled from '@emotion/styled'

const Tip = styled.div`
background: #CEE0DA;
border-radius: 15px;
display: inline-block;
font-size: 0.8rem;
padding: 5px 15px;
margin: 0 0 10px 0;
`

const Label = styled.label`
display: block;
font-weight: 500;
margin-bottom: 5px;
`

const TextField = styled.input`
width: calc(100% - 30px);
outline: 0;
border: thin solid #D8D8D8;
font-size: 1rem;
padding: 15px;
margin-bottom: 40px;
`

const Option = styled.div`
  display: flex;
  width: calc(100% - 30px);
  padding: 15px;
  background: #FFFFFF;
  border: thin solid #D8D8D8;
  border-radius: 5px;
  margin-bottom: 25px;
`

const RadioButton = styled.input`
  box-sizing: border-box;
  appearance: none;
  margin: 0;
  margin-right: 15px;
  width: 2.5rem;
  height: 1.3rem;
  background: #E2E6E9;
  border: thin solid #53B08F;
  border-radius: 50%;
  display: grid;
  place-content: center;
  &:before {
    content: '';
    width: 0.7em;
    height: 0.6em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease;
    box-shadow: inset 1em 1em #FFFFFF;
  }
  &:checked {
    background: #53B08F;
    &:before { 
      transform: scale(1);
    }
  }
`

const SubLabel = styled.span`
  display: inline-block;
  font-weight: 400;
  font-size: 0.8rem;
  margin-top: 15px;
  color: #8D8D8D;
`

export { Tip, Label, TextField, Option, RadioButton, SubLabel }
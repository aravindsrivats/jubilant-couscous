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
outline: 0;
border: thin solid #D8D8D8;
font-size: 1rem;
padding: 15px;
margin-bottom: 40px;
width: ${props => props.small ? '50%' : 'calc(100% - 30px)'};
`

const Option = styled.div`
  display: flex;
  width: calc(100% - 30px);
  padding: 15px;
  background: #FFFFFF;
  border: thin solid #D8D8D8;
  border-radius: 5px;
  margin-bottom: 25px;
  cursor: pointer;
`

const RadioButton = styled.input`
  box-sizing: border-box;
  appearance: none;
  margin: 0;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  background: #E2E6E9;
  border: thin solid #53B08F;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  place-content: center;
  display: grid;
  cursor: pointer;
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease;
    box-shadow: inset 10px 10px #FFFFFF;
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

const CheckboxInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  background: #FFFFFF;
  border: 2px solid #53B08F;
  border-radius: 3px;
  margin-right: 20px;
  cursor: pointer;
  position: relative;
  aspect-ratio: 1 / 1;

  &:checked {
    background: #53B08F;
  }
  &:checked:before {
    position: absolute;
    left: -3px;
    top: 6px;
    height: 50%;
    width: 2px;
    background-color: #FFFFFF;
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
  &:checked:after {
    position: absolute;
    left: -2px;
    bottom: 3px;
    height: 2px;
    width: 70%;
    background-color: #FFFFFF;
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
`


export { Tip, Label, TextField, Option, RadioButton, SubLabel, CheckboxInput }
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

const Block = styled.div`
  display: flex;
  flex-flow: ${props => props.vertical ? 'column' : 'row'};
  width: calc(100% - 30px);
  padding: 15px;
  background: #FFFFFF;
  border: thin solid ${props => props.success ? '#53B08F' : '#D8D8D8'};
  justify-content: ${props => props.nospace ? '': 'space-between'};
  border-radius: 5px;
  margin-bottom: 25px;
`

const Display = styled.div`
  display: flex;
  flex-flow: column;
  font-weight: 500;
  margin-bottom: ${props => props.gap ? '25px': '0'};
`
const Number = styled.p`
  margin-top: 10px;
  font-weight: 400;
`

const EditButton = styled.button`
  outline: none;
  border: thin solid #53B08F;
  background: transparent;
  color: #53B08F;
  height: 25px;
  font-size: .9rem;
  padding: 5px 10px;
  border-radius: 5px;
`

const Consent = styled.p`
  color: #676767;
  font-size: .8rem;
  padding-left: 20px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    background: #53B08F;
    top: 3px;
    left: 3px;
    border-radius: 50%;
  }
`

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
  margin-bottom: 15px;
`

const CheckIcon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #53B08F;
  margin-right: 15px;
  position: relative;
  &:before {
    position: absolute;
    left: 3px;
    top: 8px;
    height: 40%;
    width: 2px;
    background-color: #53B08F;
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
  &:after {
    position: absolute;
    left: 4px;
    bottom: 6px;
    height: 2px;
    width: 80%;
    background-color: #53B08F;
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
`

export { Tip, Label, TextField, Block, Display, Number, EditButton, Consent, StartButton, CheckIcon }
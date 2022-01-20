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

const Heading = styled.h2`
  display: flex;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
`

const Block = styled.div`
  display: flex;
  width: calc(100% - 30px);
  padding: 15px;
  background: #FFFFFF;
  border: thin solid #D8D8D8;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 25px;
`

const Display = styled.div`
  display: flex;
  flex-flow: column;
  font-weight: 500;
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

export { Tip, Label, TextField, Heading, Block, Display, Number, EditButton, Consent, StartButton }
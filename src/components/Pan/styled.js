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
`

export { Tip, Label, TextField }
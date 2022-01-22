import styled from '@emotion/styled'

const StepList = styled.section`
  display: flex;
  flex-flow: column;
  margin-top: 40px;
  margin-bottom: 25px;
`

const StepItem = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  z-index: 5;
  position: relative;
  margin-bottom: 30px;
  font-weight: 500;
`

export { StepList, StepItem }
import styled from '@emotion/styled'

const StepInfo = styled.section`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`

const StepItem = styled.div`
  display: flex;
  flex-flow: column;
  width: 60px;
  text-align: center;
  align-items: center;
`

const Count = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #53B08F;
  border-radius: 50%;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 10px;
`

export { StepInfo, StepItem, Count }
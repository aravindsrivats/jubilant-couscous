import styled from '@emotion/styled'

const StepList = styled.section`
  display: flex;
  flex-flow: column;
  margin-top: 40px;
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

const Count = styled.div`
  width: 35px;
  height: 35px;
  line-height: 35px;
  background: #CEE0DA;
  border-radius: 50%;
  text-align: center;
  aspect-ratio: 1/1;
  margin-right: 10px;
`

const Block = styled.div`
  display: flex;
  width: calc(100% - 30px);
  padding: 15px;
  background: #FFFFFF;
  border: thin solid #181F25;
  border-radius: 5px;
  margin-bottom: 25px;
`

export { StepList, StepItem, Count, Block }
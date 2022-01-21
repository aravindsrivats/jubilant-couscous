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

const Count = styled.div`
  width: 35px;
  height: 35px;
  line-height: 35px;
  background: ${props => props.completed ? '#53B08F' : '#CEE0DA'};
  border-radius: 50%;
  text-align: center;
  aspect-ratio: 1/1;
  margin-right: 10px;
`

const Block = styled.div`
  display: flex;
  display: flex;
  flex-flow: ${props => props.vertical ? 'column' : 'row'};
  width: calc(100% - 30px);
  padding: 15px;
  background: #FFFFFF;
  border: thin solid ${props => props.success ? '#53B08F' : '#D8D8D8'};
  justify-content: ${props => props.nospace ? '': 'space-between'};
  align-items: center;
  border-radius: 5px;
  margin-bottom: 25px;
`

const Display = styled.div`
  display: flex;
  flex-flow: column;
  font-weight: 500;
  margin-bottom: ${props => props.gap ? '25px': '0'};
`

const CheckIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  position: relative;
  aspect-ratio: 1 / 1;
  &:before {
    position: absolute;
    left: 5px;
    top: 16px;
    height: 20%;
    width: 2px;
    background-color: #FFFFFF;
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
  &:after {
    position: absolute;
    left: 6px;
    bottom: 15px;
    height: 2px;
    width: 40%;
    background-color: #FFFFFF;
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
`

const TickBox = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #53B08F;
  margin-right: 15px;
  position: relative;
  aspect-ratio: 1 / 1;
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

export { StepList, StepItem, Count, Block, Display, CheckIcon, TickBox }
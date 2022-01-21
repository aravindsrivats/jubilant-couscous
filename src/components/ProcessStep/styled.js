import styled from '@emotion/styled'

const StepInfo = styled.section`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  position: relative;
  &:before {
    position: absolute;
    top: 20px;
    content: '';
    width: 100%;
    height: 2px;
    background: #E0E0E0;
    z-index: 1;
  }
`

const StepItem = styled.div`
  display: flex;
  flex-flow: column;
  width: 60px;
  text-align: center;
  align-items: center;
  z-index: 5;
  position: relative;
`

const stateColors = {
  queue: '#9FCEBD',
  progress: '#53B08F',
  completed: '#36A168',
}

const Count = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: ${props => stateColors[props.state]};
  border-radius: 50%;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 10px;
`

const CheckIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  position: relative;
  aspect-ratio: 1 / 1;
  &:before {
    position: absolute;
    left: 8px;
    top: 18px;
    height: 25%;
    width: 2px;
    background-color: #FFFFFF;
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
  &:after {
    position: absolute;
    left: 8px;
    bottom: 12px;
    height: 2px;
    width: 40%;
    background-color: #FFFFFF;
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
`

export { StepInfo, StepItem, Count, CheckIcon }
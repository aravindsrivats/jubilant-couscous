import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const ripple = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`

const Block = styled.div`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
`

const Ripple = styled.div`
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  &:nth-child(2) {
    animation-delay: -0.5s;
  }
`
export { Block, Ripple }
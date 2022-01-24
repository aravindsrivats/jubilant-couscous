import styled from '@emotion/styled'

const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
  flex: 1;
`

const Children = styled.div`
  flex: 1;
`

const Shadow = styled.div`
  height: 1px;
  box-shadow: 0px -3px 2px #B4B4B4;
  margin-bottom: 15px;
`

export { Wrapper, Children, Shadow }
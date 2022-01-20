import styled from '@emotion/styled'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75px;
  margin-bottom: 20px;
`

const Logo = styled.div`
  display: flex;
  flex-flow: column;
  font-size: .6rem;
  line-height: 1.2rem;
  text-align: right;
`

const Image = styled.img`
  height: ${props => props.height};
`

export { Header, Logo, Image }
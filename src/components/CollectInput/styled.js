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

const Heading = styled.h2`
  display: flex;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
`

const Body = styled.p`
  font-weight: 500;
  line-height: 1.25rem;
  margin-bottom: 25px;
`

export { Header, Logo, Image, Heading, Body }
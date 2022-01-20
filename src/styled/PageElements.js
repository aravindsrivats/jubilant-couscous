import styled from '@emotion/styled'

const Wrapper = styled.section`
  max-width: 450px;
  width: 90%;
  margin: 30px auto 0 auto;
  font-family: Roboto, sans-serif;
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

const SmallHeading = styled.h3`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
  font-size: 1.1rem;
`

export { Wrapper, Heading, Body, SmallHeading }
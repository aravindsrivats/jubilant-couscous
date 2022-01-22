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

const Block = styled.div`
  display: flex;
  flex-flow: ${props => props.vertical ? 'column' : 'row'};
  width: calc(100% - 30px);
  padding: 15px;
  background: #FFFFFF;
  border: thin solid ${props => props.success ? '#53B08F' : '#D8D8D8'};
  justify-content: ${props => props.nospace ? '': 'space-between'};
  border-radius: 5px;
  margin-bottom: 25px;
`

const Display = styled.div`
  display: flex;
  flex-flow: column;
  font-weight: 500;
  margin-bottom: ${props => props.gap ? '25px': '0'};
`
const Number = styled.p`
  margin-top: 10px;
  font-weight: 400;
`

const EditButton = styled.button`
  outline: none;
  border: thin solid #53B08F;
  background: transparent;
  color: #53B08F;
  height: 25px;
  font-size: .9rem;
  padding: 5px 10px;
  border-radius: 5px;
`

const Consent = styled.p`
  color: #676767;
  font-size: .8rem;
  padding-left: 20px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    background: #53B08F;
    top: 3px;
    left: 3px;
    border-radius: 50%;
  }
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

const CheckIcon = styled.div`
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

const TickBox = styled.div`
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

export { Wrapper, Heading, Body, SmallHeading, Block, Count, Display, Number, EditButton, Consent, CheckIcon, TickBox }
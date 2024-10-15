// Style your elements here

import styled from 'styled-components'

export const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  background-size: cover;
  height: 100vh;
`

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 60%;
  height: 60%;
  background-color: #383a4e;
  border-radius: 10px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #edeeff;
`
export const ParaComp = styled.p`
  color: #edeeff;
`

export const InputComp = styled.input`
  background-color: #edeeff;
  height: 40px;
  width: 60%;
  margin-top: 40px;
`
export const ErrorMessage = styled.p`
  color: #ef4444;
  text-align: center;
`

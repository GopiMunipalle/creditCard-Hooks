// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
`
export const CardContainer = styled.div`
  background-color: #3b4b69;
  height: 100vh;
  width: 50%;
`
export const CardHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #ffffff;
  text-decoration: underline 3px #ffd773;
  text-align: center;
`

export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 50%;
  background-size: cover;
  margin: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: #ffffff;
`
export const CardImage = styled.img`
  height: 50px;
  width: 50px;
`
export const DetailsContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InputContainer = styled.div`
  background-color: #fff;
  border: 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2),
    -2px -2px 5px rgba(255, 255, 255, 0.2), 2px -2px 5px rgba(0, 0, 0, 0.2),
    -2px 2px 5px rgba(255, 255, 255, 0.2);
  padding: 40px;
`
export const DetailsHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #475569;
  margin-bottom: 30px;
`
export const Input = styled.input`
  border: solid 1.4px #c3cad9;
  outline: none;
  padding: 7px;
  margin-bottom: 20px;
`

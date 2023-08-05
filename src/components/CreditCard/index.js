// Write your code here\
import {useState} from 'react'
import {
  BgContainer,
  CardContainer,
  CardHeading,
  Card,
  DetailsContainer,
  DetailsHeading,
  InputContainer,
  Input,
} from './styledComponents'

function CreditCard() {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = e => {
    setNumber(e.target.value)
  }
  const onChangeName = e => {
    const newName = e.target.value
    setName(newName.toUpperCase())
  }
  return (
    <BgContainer>
      <CardContainer>
        <CardHeading>Credit Card</CardHeading>
        <Card data-testid="creditCard">
          <p>{number}</p>
          <p>CARDHOLDER NAME</p>
          <p>{name}</p>
        </Card>
      </CardContainer>
      <DetailsContainer>
        <InputContainer>
          <DetailsHeading>Payment Method</DetailsHeading>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </InputContainer>
      </DetailsContainer>
    </BgContainer>
  )
}
export default CreditCard

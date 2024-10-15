import {useState} from 'react'

import {
  MainComponent,
  CardComponent,
  Heading,
  ParaComp,
  InputComp,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [conditionSatisfied, setCondition] = useState(false)

  const onChangePassword = event => {
    setPassword(event.target.value)
    if (password.length >= 8) {
      setCondition(true)
    }
  }

  return (
    <MainComponent>
      <CardComponent>
        <Heading>Password Validator</Heading>
        <ParaComp>Check how strong and secure is your password</ParaComp>
        <InputComp
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        {conditionSatisfied ? null : (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </CardComponent>
    </MainComponent>
  )
}

export default PasswordValidator

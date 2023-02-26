import { Play } from 'phosphor-react'
import {
  ButtonContainer,
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  TaskInput,
  AmountMinutesInput,
} from './styles'
export function Home() {
  return (
    <>
      <HomeContainer>
        <form>
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
              type="text"
              name="task"
              id="task"
              placeholder="Dê um nome para o seu projeto"
            />

            <label htmlFor="amountMinutes">durante</label>
            <AmountMinutesInput
              type="number"
              name="amountMinutes"
              id="amountMinutes"
              placeholder="00"
            />
            <span>minutos.</span>
          </FormContainer>

          <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
          </CountdownContainer>

          <ButtonContainer disabled>
            <Play size={24} />
            Começar
          </ButtonContainer>
        </form>
      </HomeContainer>
    </>
  )
}

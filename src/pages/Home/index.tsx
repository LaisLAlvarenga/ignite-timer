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
  /*
    Modelo Uncontrolled:
    Busca a informação no input somente quando precisamos dela.
    Desvantagem: Perda da fluidez, como não temos o tempo real não conseguimos habilitar ou desabilitar algo de forma rápida. 
    Vantagem: Melhora na performance.
  */
  function handleSubmit(event) {
    console.log(event.target.task.value)
  }

  return (
    <>
      <HomeContainer>
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
              type="text"
              name="task"
              id="task"
              placeholder="Dê um nome para o seu projeto"
              list="task-suggestions"
            />

            {/* O <datalist> serve para ter dentro do input sugestões já fixas para o usuário. Futuramente, o que ele informar fica salvo nesse data list de sugestões */}
            <datalist id="task-suggestions">
              <option value="Teste 01" />
              <option value="Teste 02" />
              <option value="Teste 03" />
            </datalist>

            <label htmlFor="amountMinutes">durante</label>
            <AmountMinutesInput
              type="number"
              name="amountMinutes"
              id="amountMinutes"
              placeholder="00"
              step={10}
              min={10}
              max={50}
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

          <ButtonContainer>
            <Play size={24} />
            Começar
          </ButtonContainer>
        </form>
      </HomeContainer>
    </>
  )
}

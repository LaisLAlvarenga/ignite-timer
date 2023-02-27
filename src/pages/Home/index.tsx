import { useState } from 'react'
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
    Modelo de formulário Controlled:
    Monitora em tempo real as mudanças no input e armazena todas as modificações no estado.
    Vantagem: Por ser em tempo real existe uma facilidade para mostrar/desabilitar algo em tela. 
    (Ex: Habilitar botão quando preencher input e desabilitar quando estiver vazio. )
    Desvantagem: A cada vez que alteramos o estado, o React renderiza novamente todo o código. Dependendo do tamanho da aplicação isso pode ser um gargalo.
  */
  const [task, setTask] = useState('')

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
              list="task-suggestions"
              onChange={(e) => setTask(e.target.value)}
              value={task}
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

          <ButtonContainer disabled>
            <Play size={24} />
            Começar
          </ButtonContainer>
        </form>
      </HomeContainer>
    </>
  )
}

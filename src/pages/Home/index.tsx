import { useForm } from 'react-hook-form'
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
  const { register, handleSubmit, watch } = useForm()

  function handleNewSubmit(data: any) {
    console.log(data)
  }

  /* 
    Fica monitorando o input task e saber o conteúdo de dentro dele em tempo real.
    Se o conteúdo for diferente de vazio então o botão estará habilitado.
  */
  const task = watch('task')

  // Estará desabilitado quando o task estiver vazia.
  const isSubmitDisabled = !task

  return (
    <>
      <HomeContainer>
        <form onSubmit={handleSubmit(handleNewSubmit)}>
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
              type="text"
              id="task"
              placeholder="Dê um nome para o seu projeto"
              list="task-suggestions"
              {...register('task')}
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
              id="amountMinutes"
              placeholder="00"
              {...register('amountMinutes', {
                valueAsNumber: true,
              })}
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

          <ButtonContainer disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </ButtonContainer>
        </form>
      </HomeContainer>
    </>
  )
}

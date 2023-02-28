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

// @hookform/resolvers é uma biblioteca que permite a integração do react-hook-form com libs de validação como o zod.
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

/*
  1) Passar o resolver dentro do useForm()
  2) Dentro do zodResolver devemos passar todas as regras de validação que os inputs devem ter. (Separando dentro de uma var)
  3) zod.object() pois tipo de dado que o nosso form retorna é um objeto com o dado de task e amountMinute. E passamos um objeto com os dados que estamos validando (task | amountMinutes)
  4) Criamos todas as validações que cada input deve ter.
*/
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  AmountMinutesInput: zod
    .number()
    .min(5)
    .max(60, 'O ciclo deve ser de no máximo 60 minutos.'),
})

export function Home() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  function handleNewSubmit(data: any) {
    console.log(data)
  }

  // O formState é para conseguirmos visualizar os erros de validação que acontecem e não são exibidos em tela.
  console.log(formState.errors)

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
              step={10}
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

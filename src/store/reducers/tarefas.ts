import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../modules/Tarefa'
import * as enums from '../../utils/enums/tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar Javascript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'revisar o modulo 3'
    },
    {
      id: 2,
      titulo: 'Estudar Typescript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      descricao: 'revisar o modulo 2'
    },
    {
      id: 3,
      titulo: 'Estudar Bootstrap',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      descricao: 'Teinar criar uma landingPage'
    }
  ]
}

const TarefaSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    Cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const TarefaExiste = state.itens.find(
        (item) =>
          item.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      )

      if (TarefaExiste) {
        return alert('tarefa já existe')
      } else {
        const UltimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: UltimaTarefa ? UltimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    AlteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const index = state.itens.findIndex((t) => t.id === action.payload.id)
      if (index >= 0) {
        state.itens[index].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, Cadastrar, AlteraStatus } = TarefaSlice.actions

export default TarefaSlice.reducer

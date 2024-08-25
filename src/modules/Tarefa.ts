import * as enums from '../utils/enums/tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  descricao: string
  status: enums.Status
  id: number

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    descricao: string,
    status: enums.Status,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.descricao = descricao
    this.status = status
    this.id = id
  }
}

export default Tarefa

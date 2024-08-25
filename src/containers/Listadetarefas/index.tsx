import Tarefa from '../../componentes/tarefa'
import { MainContainer, Titulo } from '../../style/index'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtroDeTarefas = () => {
    let itensFiltrados = itens
    if (termo !== undefined) {
      itensFiltrados = itensFiltrados.filter(
        (item) =>
          item.titulo.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        itensFiltrados = itensFiltrados.filter(
          (item) => item.prioridade === valor
        )
      }
      if (criterio === 'status') {
        itensFiltrados = itensFiltrados.filter((item) => item.status === valor)
      }
      return itensFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltrado = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
    if (criterio === 'todas') {
      mensagem = `${quantidade} de tarefas encontradas como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} de tarefas encontradas como: ${`${criterio} = ${valor}`}  ${complementacao}`
    }
    return mensagem
  }

  const tarefas = filtroDeTarefas()
  const exibeResultado = exibeResultadoFiltrado(tarefas.length)
  return (
    <MainContainer>
      <Titulo as="p">{exibeResultado}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
              titulo={t.titulo}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas

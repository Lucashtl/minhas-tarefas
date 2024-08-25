import { Form, Opcoes, Opcao } from './styles'
import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../style/index'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/tarefa'
import { useState, FormEvent } from 'react'
import Tarefa from '../../modules/Tarefa'
import { Cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispach = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  function limpaCampo() {
    setDescricao('')
    setTitulo('')
  }

  const CadastraTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const TarefaParaAdc = new Tarefa(
      titulo,
      prioridade,
      descricao,
      enums.Status.PENDENTE,
      1
    )
    dispach(Cadastrar(TarefaParaAdc))
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={CadastraTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar
          onClick={() =>
            setTimeout(() => {
              limpaCampo()
            }, 0.5)
          }
          type="submit"
        >
          Cadastrar
        </BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario

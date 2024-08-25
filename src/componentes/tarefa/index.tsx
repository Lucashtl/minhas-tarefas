import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './style'
import { useDispatch } from 'react-redux'
import { remover, editar, AlteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../modules/Tarefa'
import { Botao, BotaoSalvar } from '../../style'
import * as enums from '../../utils/enums/tarefa'

type props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: props) => {
  const [EstaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelaEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }
  function AlteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispach(AlteraStatus({ id, finalizado: evento.target.checked }))
  }

  const dispach = useDispatch()
  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          onChange={AlteraStatusTarefa}
          checked={status === enums.Status.CONCLUIDA}
          type="checkbox"
          id={titulo}
        />
        <S.Titulo>
          {EstaEditando && <em>Editando:</em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Decricao
        disabled={!EstaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.BarraAcoes>
        {EstaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispach(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelar onClick={cancelaEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoRemover onClick={() => dispach(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa

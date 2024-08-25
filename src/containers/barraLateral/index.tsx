import { useDispatch, useSelector } from 'react-redux'
import FiltroCards from '../../componentes/FiltroCards'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/tarefa'
import { Botao, Campo } from '../../style'
import { useNavigate } from 'react-router-dom'

type props = {
  mostrarfiltro: boolean
}

const BarraLateral = ({ mostrarfiltro }: props) => {
  const dispach = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const navegate = useNavigate()
  return (
    <S.Aside>
      <div>
        {mostrarfiltro ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispach(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCards
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCards
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluidas"
              />
              <FiltroCards
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCards
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importatntes"
              />
              <FiltroCards
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <FiltroCards criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navegate('/')}>Voltar a Lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral

import BarraLateral from '../../containers/barraLateral'
import ListaDeTarefas from '../../containers/Listadetarefas'
import BotaoAdcionar from '../../componentes/BotaoAdcionar/index'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarfiltro />
      <ListaDeTarefas />
      <BotaoAdcionar />
    </>
  )
}

export default Home

import { Provider } from 'react-redux'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { container as Container } from './style'
import EstiloGlobal from './style'
import store from './store/index'
import Home from './pages/Home'
import Cadastro from './pages/cadastro'

const rota = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rota} />
      </Container>
    </Provider>
  )
}

export default App

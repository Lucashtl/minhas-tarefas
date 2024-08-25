import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
list-style: none;
}
`

export const container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-bottom: 40px;
  margin-top: 40px;
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  color: #666666;
  border-radius: 8px;
  font-weight: bold;
  border-colot: #666666;
  width: 100%;
`

export const Botao = styled.button`
  font-size: 16px;
  background-color: #2f3640;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export default EstiloGlobal

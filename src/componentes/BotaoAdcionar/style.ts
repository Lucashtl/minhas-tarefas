import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Circulo = styled(Link)`
  width: 64px;
  height: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  text-align: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  cursor: pointer;
  text-decoration: none;
`

import styled from 'styled-components'
import variaveis from '../../style/variaveis'
import * as enums from '../../utils/enums/tarefa'
import { Botao } from '../../style'

type TagsProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCordeFundo(props: TagsProps): string {
  if (props.parametro === 'status') {
    if (props.status === 'pendente') return variaveis.amarelo
    if (props.status === 'concluida') return variaveis.verde
    return variaveis.amarelo2
  } else {
    if (props.prioridade === 'urgente') return variaveis.vermelho
    if (props.prioridade === 'importante') return variaveis.amarelo2
  }

  return '#aaaaaa'
}
export const Card = styled.div`
background-color #fcfcfc;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding: 16px;
border-radius: 16px;
margin-bottom: 32px;

label{
display: flex;
align-items: center;
  margin-bottom: 16px;
}
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`

export const Tag = styled.span<TagsProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  background-color: ${(props) => retornaCordeFundo(props)};
  font-size: 10px;
  display: inline-block;
  border-radius: 8px;
  margin-right: 16px;
`
export const Decricao = styled.textarea`
color: #8b8b8b;
font-size 14px;
line-height: 24px;
font-family:'Roboto Mono', monospace;
margin-bottom: 16px;
width: 100%;
margin-top: 16px;
display: block;
resize: none;
border: none;
background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

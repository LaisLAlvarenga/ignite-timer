/* 
  Outlet é um componente do react rourter DOM utilizado para renderizar os elementos filhos da rota filho. 
  Ou seja, a rota pai (DefaultLayout) vai renderizar o <Header/> e os elementos filhos das rotas da Home e History.
*/

import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* Os elementos filhos serão renderizados dentro do Outlet */}
      <Outlet />
    </LayoutContainer>
  )
}

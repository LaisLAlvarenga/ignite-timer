import { HeaderContainer } from './styles'
import logo from '../../assets/logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <Timer size={24} />
        <Scroll size={24} />
      </div>
    </HeaderContainer>
  )
}

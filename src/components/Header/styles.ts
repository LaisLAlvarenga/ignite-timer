import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.5rem;

    /* a == NavLink */
    a {
      width: 48px;
      height: 48px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme['gray-100']};

      /* Para evitar que no momento do hover, o elemento seja jogado para cima */
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      // O NavLink quando selecionado insere a class=active no elemento.
      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`

import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 1120px;
  height: 600px;
  margin: 80px auto;
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  padding: 40px;
`

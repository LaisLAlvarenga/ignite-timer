import styled from 'styled-components'

export const HistoryContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};

    margin-bottom: 2rem;
  }
`

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse; // Para ficar com o background todo junto, sem quebras para cada TH e TD.

  min-width: 600px; /*tamanho menor gere o scroll */

  th {
    background-color: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-100']};
    padding: 1rem;
    font-size: 0.875rem;

    text-align: left;

    &:first-child {
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
    }
  }

  td {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 1rem;
    font-size: 0.875rem;
    border-top: 4px solid ${(props) => props.theme['gray-800']};

    &:first-child {
      width: 50%;
    }
  }
`
interface StatusColorsProps {
  colorStatus: 'green' | 'yellow' | 'red'
}

const color = {
  green: '#04D361',
  yellow: '#FBA94C',
  red: '#AB222E',
}

export const Status = styled.span<StatusColorsProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;

    border-radius: 50%;
    background-color: ${(props) => color[props.colorStatus]};
  }
`

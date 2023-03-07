import styled from 'styled-components'

export const CartQtdContainer = styled.div`
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  margin-right: 0.5rem;
  max-height: 2rem;

  span {
    display: flex;
    justify-content: center;

    width: 1.25rem;
  }

  button {
    width: calc(100% / 3);
    border: 0;
    cursor: pointer;
    background-color: transparent;
    svg {
      fill: ${(props) => props.theme.purple};
    }

    &:disabled {
      opacity: 0.7;
    }
  }
`

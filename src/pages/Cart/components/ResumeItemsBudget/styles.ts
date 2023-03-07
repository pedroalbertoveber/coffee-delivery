import styled from 'styled-components'

export const BudgetContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const BudgetItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseText};
  }

  strong {
    font-size: 1rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;

    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.yellow};
  padding: 0.75rem 0.5rem;
  cursor: pointer;
  margin-top: 0.875rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  border: 0;
  border-radius: 6px;
`

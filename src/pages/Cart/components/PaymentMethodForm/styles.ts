import styled from 'styled-components'

export const PaymentMethodFormContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;

  .methodsContainer {
    display: flex;
    align-items: center;

    gap: 0.75rem;
    width: 100%;
  }
`
export const MethodCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: calc(1rem - 1px);
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.baseButton};
  width: calc(100% / 3);

  gap: 0.75rem;

  svg {
    fill: ${(props) => props.theme.purple};
    cursor: inherit;
  }

  label {
    font-size: 0.75rem;
    color: ${(props) => props.theme.baseText};
    cursor: inherit;
  }
`

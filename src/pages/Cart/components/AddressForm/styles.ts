import styled from 'styled-components'

export const SubTitleContainer = styled.h2`
  font-family: 'Baloo 2';
  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme.baseSubtitle};
  margin-bottom: 1rem;
`

export const StyledFormContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;
  margin-top: -0.625rem;
  width: 100%;

  .formContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    .inputContainer {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;

      div {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
    }
  }
`

interface InputProps {
  widthSize: '100%' | '200px' | '60px'
}
export const InputDefault = styled.input<InputProps>`
  background-color: ${(props) => props.theme.baseInput};
  border: 1px solid ${(props) => props.theme.baseButton};
  padding: 0.75rem;
  border-radius: 4px;

  width: ${(props) => props.widthSize};

  &::placeholder {
    color: ${(props) => props.theme.baseLabel};
    font-size: 0.875rem;
  }
`

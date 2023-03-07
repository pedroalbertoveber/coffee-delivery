import styled from 'styled-components'

export const CoffeeItemContainer = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;

  padding-bottom: calc(0.5rem + 1.5rem);
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};

  .imageContainer {
    width: 4rem;
    height: 4rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0;

  h4 {
    color: ${(props) => props.theme.baseSubtitle};
    font-weight: 400;
    font-size: 1rem;
  }

  .actions {
    display: flex;
    justify-content: flex-start;

    button {
      border: 0;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.25rem;
      background-color: ${(props) => props.theme.baseButton};
      color: ${(props) => props.theme.baseText};
      cursor: pointer;
      border-radius: 6px;
      font-size: 0.75rem;

      svg {
        fill: ${(props) => props.theme.purple};
      }
    }
  }
`

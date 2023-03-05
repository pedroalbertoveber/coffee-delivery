import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  img {
    width: 5.3rem;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`

export const ActionButtonContainerDefault = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;
  cursor: pointer;

  padding: 0.5rem;
  border: 0;
  border-radius: 4px;
`

export const LocationButton = styled(ActionButtonContainerDefault)`
  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purple};
  svg {
    fill: ${(props) => props.theme.purple};
  }
`

export const GroceryCartButton = styled(ActionButtonContainerDefault)`
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellow};
  svg {
    fill: ${(props) => props.theme.yellow};
  }
`

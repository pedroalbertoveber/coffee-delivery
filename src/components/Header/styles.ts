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
  position: relative;
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellow};
  svg {
    fill: ${(props) => props.theme.yellow};
  }

  span {
    position: absolute;
    background-color: ${(props) => props.theme.yellowDark};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    font-weight: bold;
    font-size: 0.75rem;
    color: ${(props) => props.theme.white};

    transform: translate(-50%, -50%);
    left: 100%;
    bottom: 35%;
  }
`

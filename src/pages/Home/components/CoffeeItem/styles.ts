import styled from 'styled-components'

export const StyledCoffeeItemContainer = styled.div`
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.baseCard};
  max-width: 16rem;

  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .coffeeDescription {
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    color: ${(props) => props.theme.baseLabel};
    margin-bottom: 2rem;
  }

  .linkToCart {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.purpleDark};
    border-radius: 6px;
    cursor: pointer;
    svg {
      fill: ${(props) => props.theme.baseCard};
    }
  }
`

export const StyledTagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
  margin-bottom: 1rem;

  span {
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.yellowLight};
    color: ${(props) => props.theme.yellowDark};
    border-radius: 100px;
    font-weight: bold;
    font-size: 0.625rem;
  }
`

export const CartActionsContainer = styled.div`
  display: flex;
  p {
    display: inline-block;
    font-size: 1rem;

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 900;
      color: ${(props) => props.theme.baseText};
    }
  }
`

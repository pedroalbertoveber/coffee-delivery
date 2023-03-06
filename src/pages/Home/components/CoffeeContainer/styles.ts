import styled from 'styled-components'

export const StyledCoffeeContainer = styled.section`
  h2 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme.baseTitle};
    font-size: 2rem;
    margin-bottom: 3.375rem;
  }

  .coffeeContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding-bottom: 9.8rem;
  }
`

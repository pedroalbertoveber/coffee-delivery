import styled from 'styled-components'

export const CartContainer = styled.section`
  display: flex;
  gap: 2rem;
  padding: 2.5rem 0;

  .container {
    display: flex;
    gap: 2rem;

    width: calc(60% - 1rem);
  }
`

export const Separator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`

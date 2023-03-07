import styled from 'styled-components'

export const SubTitleContainer = styled.h2`
  font-family: 'Baloo 2';
  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme.baseSubtitle};
  margin-bottom: 1rem;
`

export const CartResumeContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px 44px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(40% -1rem);
`

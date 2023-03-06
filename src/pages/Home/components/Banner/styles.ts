import styled from 'styled-components'

export const BannerContainer = styled.div`
  padding: 5.875rem 0;

  display: flex;
  align-items: flex-start;

  .imageContainer,
  .description {
    width: 50%;
  }

  .description {
    h2 {
      font-size: 3rem;
      font-family: 'Baloo 2', sans-serif;
      line-height: 1.3;
      margin-bottom: 1rem;
      color: ${(props) => props.theme.baseTitle};
    }

    span {
      font-size: 1.25rem;
    }

    .itemsContainer {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 1.25rem;
      margin-top: 4.125rem;
      max-height: 100px;
    }
  }

  .imageContainer {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
      width: 29.75rem;
      object-fit: cover;
    }
  }
`

import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  .page_title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      color: ${(props) => props.theme.yellowDark};
      font-size: 2rem;
    }

    span {
      color: ${(props) => props.theme.baseSubtitle};
      font-size: 1.25rem;
    }
  }

  .infoWrapper {
    display: flex;
    gap: 6.375rem;
    width: 100%;
  }
`

export const OrderInfo = styled.div`
  padding: 0.1rem;
  background: linear-gradient(to left, #8047f8, #dbac2c);
  border-radius: 6px 32px;
  width: 100%;

  .wrapper {
    padding: 2.5rem;
    width: 100%;
    height: 100%;
    border-radius: 6px 32px;
    border: 1px solid transparent;
    background-color: ${(props) => props.theme.background};

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

const POSSIBLE_COLORS = {
  purple: 'purple',
  yellow: 'yellow',
  yellowDark: 'yellowDark',
} as const

interface InfoProps {
  possibleColors: keyof typeof POSSIBLE_COLORS
}

export const UniqueInfoContainer = styled.div<InfoProps>`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  width: 100%;
  padding: 0 !important;

  .iconContainer {
    background-color: ${(props) =>
      props.theme[POSSIBLE_COLORS[props.possibleColors]]};
    padding: 0.5rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: ${(props) => props.theme.white};
    }
  }

  .infoContent {
    display: flex;
    flex-direction: column;
    flex: 1;

    p {
      font-size: 1rem;
      color: ${(props) => props.theme.baseText};
      line-height: 1.3;
    }

    strong {
      color: ${(props) => props.theme.baseSubtitle};
      font-weight: bold;
    }
  }
`

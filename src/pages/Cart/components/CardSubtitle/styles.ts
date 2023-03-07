import styled from 'styled-components'

export const StyledSubtitleCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  .content {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme.baseSubtitle};
      font-weight: 400;
    }

    span {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme.baseText};
    }
  }
`

const FILL_COLORS = {
  yellowDark: 'yellowDark',
  purple: 'purple',
} as const

interface FillColorsProps {
  possibleColors: keyof typeof FILL_COLORS
}

export const StyledIcon = styled.div<FillColorsProps>`
  svg {
    fill: ${(props) =>
      props.theme[FILL_COLORS[props.possibleColors]]} !important;
  }
`

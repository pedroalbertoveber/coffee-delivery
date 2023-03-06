import styled from 'styled-components'

const BACKGROUND_COLORS = {
  yellow: `yellow`,
  yellowDark: 'yellowDark',
  purple: 'purple',
  black: 'baseText',
} as const

interface BannerProps {
  backgroundColors: keyof typeof BACKGROUND_COLORS
}

export const BannerItemContainer = styled.div<BannerProps>`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 1rem;
  }

  .iconWrapper {
    padding: 0.5rem;
    background-color: ${(props) =>
      props.theme[BACKGROUND_COLORS[props.backgroundColors]]};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    svg {
      fill: ${(props) => props.theme.white};
    }
  }
`

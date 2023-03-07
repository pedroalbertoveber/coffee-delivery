import { ReactNode } from 'react'
import { StyledSubtitleCardContainer, StyledIcon } from './styles'

interface Props {
  icon: ReactNode
  mainContent: string
  subContent: string
  color: 'yellowDark' | 'purple'
}

export function CardSubtitle({ icon, mainContent, color, subContent }: Props) {
  return (
    <StyledSubtitleCardContainer>
      <StyledIcon possibleColors={color}>{icon}</StyledIcon>
      <div className="content">
        <strong>{mainContent}</strong>
        <span>{subContent}</span>
      </div>
    </StyledSubtitleCardContainer>
  )
}

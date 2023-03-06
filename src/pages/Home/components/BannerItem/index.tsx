import React from 'react'
import { BannerItemContainer } from './styles'

interface Props {
  color: 'yellowDark' | 'black' | 'yellow' | 'purple'
  content: string
  icon: React.ReactNode
}

export function BannerItem({ color, content, icon }: Props) {
  return (
    <BannerItemContainer backgroundColors={color}>
      <div className="iconWrapper">{icon}</div>
      <p className="content">{content}</p>
    </BannerItemContainer>
  )
}

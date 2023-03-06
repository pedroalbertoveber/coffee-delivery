import Image from '../../../../assets/img/Imagem.png'
import { BannerItem } from '../BannerItem'
import { BannerContainer } from './styles'

import { Timer, ShoppingCart, Package, Coffee } from 'phosphor-react'

export function Banner() {
  return (
    <BannerContainer>
      <div className="description">
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <div className="itemsContainer">
          <BannerItem
            color="yellowDark"
            content="Compra simples e segura"
            icon={<ShoppingCart weight="fill" size={16} />}
          />
          <BannerItem
            color="yellow"
            content="Entrega rápida e rastreada"
            icon={<Timer weight="fill" size={16} />}
          />
          <BannerItem
            color="black"
            content="Embalagem mantém o café intacto"
            icon={<Package weight="fill" size={16} />}
          />
          <BannerItem
            color="purple"
            content="O café chega fresquinho até você"
            icon={<Coffee weight="fill" size={16} />}
          />
        </div>
      </div>
      <div className="imageContainer">
        <img
          src={Image}
          alt="Copo de café com fundo redondo amarelo com grãos de café espalhados ao redor"
        />
      </div>
    </BannerContainer>
  )
}

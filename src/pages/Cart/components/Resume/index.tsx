import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { CardCoffeeItem } from '../CardCoffeeItem'
import { ResumeItemsBudget } from '../ResumeItemsBudget'
import { SubTitleContainer, CartResumeContainer, Wrapper } from './styles'

export function Resume() {
  const { coffeesInCartList } = useContext(CartContext)

  return (
    <Wrapper>
      <SubTitleContainer>Cafés selecionados</SubTitleContainer>
      <CartResumeContainer>
        {coffeesInCartList.length === 0 && (
          <p>Não há nenhum café no seu carrinho</p>
        )}
        {coffeesInCartList.length !== 0 && (
          <>
            <ul>
              {coffeesInCartList.map((item) => {
                return <CardCoffeeItem {...item} key={item.id} />
              })}
            </ul>
            <ResumeItemsBudget cartList={coffeesInCartList} />
          </>
        )}
      </CartResumeContainer>
    </Wrapper>
  )
}

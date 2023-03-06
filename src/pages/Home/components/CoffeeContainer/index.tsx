import { coffees } from '../../../../data/coffees'
import { CoffeeItem } from '../CoffeeItem'
import { StyledCoffeeContainer } from './styles'

export function CoffeeContainer() {
  const coffeeList = coffees

  return (
    <StyledCoffeeContainer>
      <h2>Nossos cafés</h2>
      <div className="coffeeContainer">
        {coffeeList.map((item) => {
          return <CoffeeItem key={item.id} {...item} />
        })}
      </div>
    </StyledCoffeeContainer>
  )
}

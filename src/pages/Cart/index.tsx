import { AddressForm } from './components/AddressForm'
import { PaymentMethodForm } from './components/PaymentMethodForm'
import { Resume } from './components/Resume'
import { CartContainer, Separator } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <div className="container">
        <Separator>
          <AddressForm />
          <PaymentMethodForm />
        </Separator>
      </div>
      <Resume />
    </CartContainer>
  )
}

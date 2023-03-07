import { CurrencyDollar, Money, CreditCard, Bank } from 'phosphor-react'
import { CardSubtitle } from '../CardSubtitle'
import { PaymentMethodFormContainer, MethodCard } from './styles'

export function PaymentMethodForm() {
  return (
    <PaymentMethodFormContainer>
      <CardSubtitle
        color="purple"
        icon={<CurrencyDollar size={22} weight={'fill'} />}
        mainContent={'Pagamento'}
        subContent={
          'O pagamento é feito na entrega. Escolha a forma que deseja pagar'
        }
      />
      <div className="methodsContainer">
        <MethodCard>
          <CreditCard size={16} weight="fill" />
          <label>CARTÃO DE CRÉDITO</label>
        </MethodCard>
        <MethodCard>
          <Bank size={16} weight="fill" />
          <label>CARTÃO DE DÉBITO</label>
        </MethodCard>
        <MethodCard>
          <Money size={16} weight="fill" />
          <label>DINHEIRO</label>
        </MethodCard>
      </div>
    </PaymentMethodFormContainer>
  )
}

import { CurrencyDollar, Money, CreditCard, Bank } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { CardSubtitle } from '../CardSubtitle'
import { PaymentMethodFormContainer, MethodCard } from './styles'

export function PaymentMethodForm() {
  const { register } = useFormContext()

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
        <MethodCard htmlFor="paymentMethod_credit">
          <CreditCard size={16} weight="fill" />
          <span>CARTÃO DE CRÉDITO</span>
          <input
            type={'radio'}
            value={'Cartão de Crédito'}
            id="paymentMethod_credit"
            {...register('paymentMethod')}
          />
        </MethodCard>
        <MethodCard htmlFor="paymentMethod_debit">
          <Bank size={16} weight="fill" />
          <span>CARTÃO DE DÉBITO</span>
          <input
            type={'radio'}
            value={'Cartão de Débito'}
            id="paymentMethod_debit"
            {...register('paymentMethod')}
          />
        </MethodCard>
        <MethodCard htmlFor="paymentMethod_cash">
          <Money size={16} weight="fill" />
          <span>DINHEIRO</span>
          <input
            type={'radio'}
            value={'Dinheiro'}
            id="paymentMethod_cash"
            {...register('paymentMethod')}
          />
        </MethodCard>
      </div>
    </PaymentMethodFormContainer>
  )
}

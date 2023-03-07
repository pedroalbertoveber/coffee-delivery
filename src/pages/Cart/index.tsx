import { AddressForm } from './components/AddressForm'
import { PaymentMethodForm } from './components/PaymentMethodForm'
import { Resume } from './components/Resume'
import { CartContainer, Separator } from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const AddressAndPaymentMethodValidationSchema = z.object({
  zipcode: z.string().max(9).min(8),
  street: z.string().max(255).min(5),
  number: z.string(),
  address_complement: z.string().optional(),
  neighborhood: z.string().max(100).min(2),
  city: z.string().max(100).min(5),
  state: z.string().length(2),
  paymentMethod: z.enum(['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro']),
})

type FormData = z.infer<typeof AddressAndPaymentMethodValidationSchema>

export function Cart() {
  const adressAndPaymentFormData = useForm<FormData>({
    resolver: zodResolver(AddressAndPaymentMethodValidationSchema),
    defaultValues: {
      zipcode: '',
      address_complement: '',
      city: '',
      neighborhood: '',
      number: '',
      paymentMethod: 'Dinheiro',
      state: '',
      street: '',
    },
  })

  const { handleSubmit } = adressAndPaymentFormData

  function submitAddressAndPaymentForm(data: FormData) {
    console.log(data)
  }

  return (
    <CartContainer onSubmit={handleSubmit(submitAddressAndPaymentForm)}>
      <FormProvider {...adressAndPaymentFormData}>
        <div className="container">
          <Separator>
            <AddressForm />
            <PaymentMethodForm />
          </Separator>
        </div>
        <Resume />
      </FormProvider>
    </CartContainer>
  )
}

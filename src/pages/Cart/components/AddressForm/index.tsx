import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { CardSubtitle } from '../CardSubtitle'
import { StyledFormContainer, InputDefault, SubTitleContainer } from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <>
      <SubTitleContainer>Complete seu pedido</SubTitleContainer>
      <StyledFormContainer>
        <div className="formContainer">
          <CardSubtitle
            icon={<MapPinLine size={22} weight={'fill'} />}
            color={'yellowDark'}
            mainContent={'Endereço de entrega'}
            subContent={'Informe o endereço onde deseja receber seu pedido'}
          />
          <div className="inputContainer">
            <InputDefault
              type="text"
              placeholder="CEP"
              widthSize="200px"
              required
              {...register('zipcode')}
            />
            <InputDefault
              type="text"
              placeholder="Rua"
              widthSize="100%"
              required
              {...register('street')}
            />
            <div>
              <InputDefault
                type="number"
                placeholder="Número"
                widthSize="200px"
                required
                {...register('number')}
              />
              <InputDefault
                type="text"
                placeholder="Complemento"
                widthSize="100%"
                {...register('address_complement')}
              />
            </div>
            <div>
              <InputDefault
                type="text"
                placeholder="Bairro"
                widthSize="200px"
                required
                {...register('neighborhood')}
              />
              <InputDefault
                type="text"
                placeholder="Cidade"
                widthSize="100%"
                required
                {...register('city')}
              />
              <InputDefault
                type="text"
                placeholder="UF"
                widthSize="60px"
                required
                {...register('state')}
              />
            </div>
          </div>
        </div>
      </StyledFormContainer>
    </>
  )
}

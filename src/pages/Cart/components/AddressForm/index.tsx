import { MapPinLine } from 'phosphor-react'
import { CardSubtitle } from '../CardSubtitle'
import { StyledFormContainer, InputDefault, SubTitleContainer } from './styles'

export function AddressForm() {
  return (
    <>
      <SubTitleContainer>Complete seu pedido</SubTitleContainer>
      <StyledFormContainer>
        <form>
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
            />
            <InputDefault
              type="text"
              placeholder="Rua"
              widthSize="100%"
              required
            />
            <div>
              <InputDefault
                type="number"
                placeholder="Número"
                widthSize="200px"
                required
              />
              <InputDefault
                type="text"
                placeholder="Complemento"
                widthSize="100%"
              />
            </div>
            <div>
              <InputDefault
                type="text"
                placeholder="Bairro"
                widthSize="200px"
                required
              />
              <InputDefault
                type="text"
                placeholder="Cidade"
                widthSize="100%"
                required
              />
              <InputDefault
                type="text"
                placeholder="UF"
                widthSize="60px"
                required
              />
            </div>
          </div>
        </form>
      </StyledFormContainer>
    </>
  )
}

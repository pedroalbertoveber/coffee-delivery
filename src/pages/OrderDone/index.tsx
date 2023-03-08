import Illustration from '../../assets/img/Illustration.png'
import {
  ConfirmedOrderContainer,
  OrderInfo,
  UniqueInfoContainer,
} from './styles'
import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { OrderFormData } from '../Cart'

export function OrderDone() {
  const [order, setOrder] = useState<OrderFormData>({
    city: '',
    neighborhood: '',
    number: '',
    paymentMethod: 'Dinheiro',
    state: '',
    street: '',
    zipcode: '',
    address_complement: '',
  })

  useEffect(() => {
    const orderParsed: OrderFormData = JSON.parse(
      localStorage.getItem('@coffee-delivery:v-1.0.0')!,
    )

    if (orderParsed) {
      setOrder(orderParsed)
    }
  }, [])

  return (
    <ConfirmedOrderContainer>
      <div className="page_title">
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você!</span>
      </div>
      <div className="infoWrapper">
        <OrderInfo>
          <div className="wrapper">
            <UniqueInfoContainer possibleColors="purple">
              <div className="iconContainer">
                <MapPin size={16} weight="fill" />
              </div>
              <div className="infoContent">
                <p>
                  Entrega em{' '}
                  <strong>
                    {order.street}, {order.number}
                  </strong>
                </p>
                <p>
                  {order.neighborhood} - {order.city}, {order.state}
                </p>
              </div>
            </UniqueInfoContainer>
            <UniqueInfoContainer possibleColors="yellow">
              <div className="iconContainer">
                <Timer size={16} weight="fill" />
              </div>
              <div className="infoContent">
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </UniqueInfoContainer>
            <UniqueInfoContainer possibleColors="yellowDark">
              <div className="iconContainer">
                <CurrencyDollar size={16} weight="fill" />
              </div>
              <div className="infoContent">
                <p>Pagamento na entrega</p>
                <p>
                  <strong>{order.paymentMethod}</strong>
                </p>
              </div>
            </UniqueInfoContainer>
          </div>
        </OrderInfo>
        <div>
          <img
            src={Illustration}
            alt="Homem dirigindo uma motocicleta roxa com encomenda no bagageiro"
          />
        </div>
      </div>
    </ConfirmedOrderContainer>
  )
}

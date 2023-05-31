import { X } from 'phosphor-react'

import {
  BottomFixed,
  BuyButton,
  CartContainer,
  CartHeader,
  CartProducts,
  OpenCart,
  Price,
} from './styles'

import tagImg from '../../assets/Tag.png'

import { useContext, useState } from 'react'
import { CartProduct } from '../CartProduct'
import { cartContext } from '../../contexts/useCart'

export function Cart() {
  const { cart } = useContext(cartContext)
  const [cartOpen, setCartOpen] = useState(true)

  const totalItens = cart.length

  const priceTotal = cart.reduce((acc, item) => {
    acc += Number(item.value)
    return acc
  }, 0)

  const priceTotalFormated = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceTotal)

  function closeCart() {
    setCartOpen(!cartOpen)
  }

  function openCart() {
    setCartOpen(!cartOpen)
  }

  return (
    <>
      {cartOpen ? (
        <CartContainer isCartOpen={cartOpen}>
          <CartHeader>
            <p>
              Seu carrinho tem <span> {totalItens} itens</span>
            </p>

            <button onClick={closeCart}>
              <X size={24} />
            </button>
          </CartHeader>

          <CartProducts>
            {cart.map((item) => {
              return (
                <CartProduct
                  name={item.productName}
                  value={item.value}
                  url={item.url}
                  key={item.productName}
                />
              )
            })}
          </CartProducts>

          <BottomFixed>
            <Price>
              <div className="total">
                <span>Total:</span>
                <strong>{priceTotalFormated}</strong>
              </div>
              <div className="cupom">
                <img src={tagImg} alt="" />
                <input type="text" placeholder="Adicionar cupom" />
              </div>
            </Price>

            <BuyButton>Finalizar Compra</BuyButton>
          </BottomFixed>
        </CartContainer>
      ) : (
        <OpenCart onClick={openCart}>
          <span></span>
          <span></span>
          <span></span>
        </OpenCart>
      )}
    </>
  )
}

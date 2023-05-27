import { Plus, X } from 'phosphor-react'

import { CartItensProps } from '../../App'

import {
  BottomContent,
  BottomFixed,
  BuyButton,
  CartContainer,
  CartHeader,
  CartProducts,
  NameProduct,
  OpenCart,
  Price,
} from './styles'

import tagImg from '../../assets/Tag.png'
import miniusImg from '../../assets/Minus.png'

import { useState } from 'react'

interface CartProps {
  cartItens: CartItensProps[]
}

export function Cart({ cartItens }: CartProps) {
  const [cartOpen, setCartOpen] = useState(true)

  const [quantityItem, setQuantityItem] = useState(1)

  function handleAddQuantityItem() {
    setQuantityItem((prev) => prev + 1)
  }

  function handleSubtrackQuantityItem() {
    if (quantityItem === 0) {
      return
    }

    setQuantityItem((prev) => prev - 1)
  }

  const totalItens = cartItens.length

  const priceTotal = cartItens.reduce((acc, item) => {
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
            {cartItens.map((item) => {
              return (
                <div className="cart-product" key={item.productName}>
                  <div className="cart-product-image">
                    <img src={item.url} alt="" />
                  </div>

                  <div className="main">
                    <NameProduct>{item.productName}</NameProduct>

                    <BottomContent>
                      <strong>R$ {item.value}</strong>
                      <div className="addRemove">
                        <button
                          onClick={handleSubtrackQuantityItem}
                          className="subtract"
                        >
                          <img src={miniusImg} alt="" />
                        </button>

                        <div className="qty">
                          <p>{quantityItem}</p>
                        </div>

                        <button onClick={handleAddQuantityItem} className="add">
                          <Plus size={16} />
                        </button>
                      </div>
                    </BottomContent>
                  </div>
                </div>
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

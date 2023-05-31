import { Plus } from 'phosphor-react'

import miniusImg from '../../assets/Minus.png'

import { BottomContent, NameProduct } from './styles'
import { useContext, useState } from 'react'
import { cartContext } from '../../contexts/useCart'

interface CartProductProps {
  name: string
  value: string
  url: string
}

export function CartProduct({ name, value, url }: CartProductProps) {
  const { handleRemoveProduct } = useContext(cartContext)

  const [quantityItem, setQuantityItem] = useState(1)

  function handleAddQuantityItem() {
    setQuantityItem((prev) => prev + 1)
  }

  function handleSubtrackQuantityItem() {
    if (quantityItem <= 0) {
      handleRemoveProduct(name)
      return
    }

    setQuantityItem((prev) => prev - 1)
  }

  return (
    <div className="cart-product">
      <div className="cart-product-image">
        <img src={url} alt="" />
      </div>

      <div className="main">
        <NameProduct>{name}</NameProduct>

        <BottomContent>
          <strong>R$ {value}</strong>
          <div className="addRemove">
            <button onClick={handleSubtrackQuantityItem} className="subtract">
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
}

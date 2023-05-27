import { ProductList } from './components/ProductList'
import { Cart } from './components/Cart'
import { MainContainer } from './styles/App'
import { useState } from 'react'

export interface CartItensProps {
  productName: string
  value: string
  url: string
}

function App() {
  const [cart, setCart] = useState<CartItensProps[]>([])

  function handleAddProduct(productName: string, value: string, url: string) {
    const productsExisteInCart = cart.find(
      (product) => product.productName === productName,
    )

    if (productsExisteInCart) {
      return
    }

    const itemAdd = {
      productName,
      value,
      url,
    }

    setCart((prev) => [...prev, itemAdd])
  }

  return (
    <MainContainer>
      <ProductList addProduct={handleAddProduct} />

      <Cart cartItens={cart} />
    </MainContainer>
  )
}

export default App

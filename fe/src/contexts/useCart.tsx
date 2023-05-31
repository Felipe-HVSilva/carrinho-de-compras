import { ReactNode, createContext, useState } from 'react'

interface CartProviderProps {
  children: ReactNode
}

export interface CartItensProps {
  productName: string
  value: string
  url: string
}

interface CartContextProps {
  cart: CartItensProps[]
  handleAddProduct: (productName: string, value: string, url: string) => void
  handleRemoveProduct: (productName: string) => void
}

export const cartContext = createContext<CartContextProps>(
  {} as CartContextProps,
)

export function CartProvider({ children }: CartProviderProps) {
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

  function handleRemoveProduct(productName: string) {
    const removeProduct = cart.filter(
      (item) => item.productName !== productName,
    )

    setCart(removeProduct)
  }

  return (
    <cartContext.Provider
      value={{ cart, handleAddProduct, handleRemoveProduct }}
    >
      {children}
    </cartContext.Provider>
  )
}

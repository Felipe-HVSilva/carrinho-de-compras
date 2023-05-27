import { useEffect, useState } from 'react'
import axios from 'axios'

import { Product, ProductContainer } from './styles'

interface ProductsProps {
  id: number
  name: string
  price: string
  url: string
}

interface ProductListProps {
  addProduct: (productName: string, value: string, url: string) => void
}

export function ProductList({ addProduct }: ProductListProps) {
  const [productsList, setProductssList] = useState<ProductsProps[]>([])

  async function searchProduct() {
    const products = await axios.get(
      'https://backend-carrinho.onrender.com/products',
    )

    setProductssList(products.data)
  }

  useEffect(() => {
    searchProduct()
  }, [])

  return (
    <ProductContainer>
      {productsList.map((product) => {
        return (
          <Product key={product.id}>
            <div className="product-image">
              <img src={product.url} alt="" />
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <div>
                <span>R$ {product.price}</span>
                <button
                  onClick={() =>
                    addProduct(product.name, product.price, product.url)
                  }
                >
                  add
                </button>
              </div>
            </div>
          </Product>
        )
      })}
    </ProductContainer>
  )
}

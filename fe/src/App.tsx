import { ProductList } from './components/ProductList'
import { Cart } from './components/Cart'
import { MainContainer } from './styles/App'
import { CartProvider } from './contexts/useCart'

function App() {
  return (
    <MainContainer>
      <CartProvider>
        <ProductList />

        <Cart />
      </CartProvider>
    </MainContainer>
  )
}

export default App

import Cart from "./cart"
import { CartProvider } from "./Context"
import Product from "./product"
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>

    </>
  )
}

export default App

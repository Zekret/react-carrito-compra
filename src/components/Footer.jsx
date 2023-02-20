import { useCart } from "../hooks/useCart"

export default function Footer() {
  const { cart } = useCart()
  return (
    <footer className='footer'>
        {
            JSON.stringify(cart, null, 2)
        }
      <h4>Prueba técnica de React ⚛️</h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}

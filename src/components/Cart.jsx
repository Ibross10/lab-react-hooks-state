import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <section className="cart-section">
      <h2>Shopping Cart</h2>
      <p data-testid="cart-total">
        Cart Total: {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
      </p>

      <ul>
        {cartItems.map((item, index) => (
          <li key={`${item.id}-${index}`}>
            {item.name} is in your cart.
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Cart

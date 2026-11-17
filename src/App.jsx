import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const toggleDarkMode = () => {
    setIsDarkMode((previousMode) => !previousMode)
  }

  const addToCart = (product) => {
    setCartItems((previousItems) => [...previousItems, product])
  }

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <main className="shopping-container">
        <h1>🛒 Shopping App</h1>
        <p>Welcome! Find your favourite products and add them to your cart.</p>

        <DarkModeToggle
          isDarkMode={isDarkMode}
          onToggle={toggleDarkMode}
        />

        <section className="filter-section">
          <label htmlFor="category-filter">Filter by Category: </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="all">All</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
          </select>
        </section>

        <ProductList
          selectedCategory={selectedCategory}
          onAddToCart={addToCart}
        />

        <Cart cartItems={cartItems} />
      </main>
    </div>
  )
}

export default App

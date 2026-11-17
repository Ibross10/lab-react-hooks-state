import React from 'react'

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Toggle Dark Mode"
    >
      Toggle Dark Mode: {isDarkMode ? 'Light' : 'Dark'}
    </button>
  )
}

export default DarkModeToggle

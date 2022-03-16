import React from 'react'

function Header({isDarkMode, onDarkModeClick }) {

  function handleModeClick() {
    onDarkModeClick();
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  );
}

export default Header
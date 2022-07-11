import React from 'react'

import Logout from '../Logout'

function Header({ setIsAdding, setIsAuthenticated }) {
  return (<header>
    <h3>
      Banner Management
    </h3>

    <div style={{ marginTop: '30px', marginBottom: '18px' }}>
      <button onClick={() => setIsAdding(true)}>
        Add Banner
      </button>
    </div>

  </header>)
}

export default Header

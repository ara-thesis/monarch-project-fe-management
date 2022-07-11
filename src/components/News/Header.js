import React from 'react'

function Header({ setIsAdding, setIsAuthenticated }) {
    return (<header>
        <h3>
            News Management
        </h3>

        <div style={{ marginTop: '30px', marginBottom: '18px' }}>
            <button onClick={() => setIsAdding(true)}>
                Add News
            </button>
        </div>
    </header>)
}

export default Header

import React from 'react'

import Logout from '../Logout'

function Header({ setIsAdding }) {
    return (<header>
        <h3>
            Ticket Management
        </h3>

        <div style={{ marginTop: '30px', marginBottom: '18px' }}>
            <button onClick={() => setIsAdding(true)}>
                Add Ticket
            </button>
        </div>
    </header>)
}

export default Header

import React from 'react'

import Logout from '../Logout'

function Header({ setIsAdding, setIsAuthenticated }) {
    return (<header>
        <h3>
            Ticket Management
        </h3>

        <div style={{ marginTop: '30px', marginBottom: '18px' }}>
            <button onClick={() => setIsAdding(true)}>
                Add Ticket
            </button>

            <Logout setIsAuthenticated={setIsAuthenticated} />
        </div>
    </header>)
}

export default Header

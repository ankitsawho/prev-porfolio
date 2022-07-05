import React from 'react'

function Logo() {
    return (
        <div className="logo-container" onClick={() => document.getElementById('top').scrollIntoView()}>
            <div className="logo">
                <h2>a</h2>
            </div>
        </div>
    )
}

export default Logo
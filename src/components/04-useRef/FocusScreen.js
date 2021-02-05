import React, { useRef } from 'react'

export const FocusScreen = () => {

    const ref = useRef()

    const handleClick = e => {
        ref.current.select();
    }

    return (
        <div>
            <input
                ref={ref}
                className="form-control"
                placeholder="nombre"
            />
            
            <button 
                className="btn btn-outline-primary"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}

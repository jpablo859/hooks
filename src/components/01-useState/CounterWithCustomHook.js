import React from 'react'
import './counter.css';
import {useCounter} from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const inicialState = 100;

    const {state, increment, decrement, reset} = useCounter(inicialState);

    const factor = 5;

    return (
        <>
            <h1>Counter with hook: {state}</h1>
            <hr/>

            <button 
            onClick={() => increment(factor)}
            className="btn btn-primary">
                +1
            </button>

            <button 
            onClick={() => reset(inicialState)}
            className="btn btn-primary">
                reset
            </button>

            <button 
            onClick={() => decrement(factor)}
            className="btn btn-danger">
                -1
            </button>
            
        </>
    )
}

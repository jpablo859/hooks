import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const {state, increment} = useCounter(1);

    const {loading, data, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    console.log(error)

    const {author, quote} = !!data && data[0];

    return (
        <div>
            <h1>Breaking Quotes</h1>
            <hr/>

                {error 
                ?
                    <div className="alert alert-danger text-center">
                        <span>{error}</span>
                    </div>
                :
                    loading 
                    ?
                        <div className="alert alert-info text-center">
                            <span>Loading</span>
                        </div>
                    :
                        <blockquote className="blockquote text-right">
                            <p className="mb-2">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    }

                    <button 
                        className="btn btn-primary"
                        onClick={increment}
                    >
                        Siguiente
                    </button>
        </div>
    )
}

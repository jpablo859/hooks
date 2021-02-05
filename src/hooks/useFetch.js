import React, { useState, useEffect } from 'react'

export const useFetch = (url) => {
    
    const [state, setState] = useState({data:null, loading:true, error:null})

    useEffect(() => {
        (async () => {

            try {
                setState({
                    ...state,
                    loading:true,
                    data: null
                })
    
                const resp = await fetch(url);
                const response = await resp.json();
    
                setState({
                    error:null,
                    loading:false,
                    data: response
                })
            } catch (err) {
                setState({
                    error:'No hay datos',
                    loading:false,
                    data: null
                }) 
            }

        })()
    }, [url])

    return state;

}

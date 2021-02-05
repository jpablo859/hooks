import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css'
import { Message } from './Message';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('email cambió')
    }, [email])


    const handleISubmit = e => {
        e.preventDefault();

        console.log(formValues)
    }


    return (
        <>

                <h1>FormWithCustomHook</h1>

                <hr/>

                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Tu email"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Tu password"
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange}
                    />
                    
                    .<button onClick={handleISubmit} className="btn btn-primary" type="submit">Guardar</button>
                </div>
        </>
    )
}

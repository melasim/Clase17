import React from 'react'

const Form = ({handleClick}) => {
    
    return (
        <div>
            <h3>Ingrese un texto sin números</h3>
        <form>
            <input data-testid='text' type="text"/>
            <button data-testid='boton' onClick={handleClick}>Enviar</button>
        </form>
        </div>
    )
}

export default Form
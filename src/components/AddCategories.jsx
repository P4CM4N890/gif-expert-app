import { useState } from 'react'

export const AddCategories = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const value = inputValue.trim();
        if( value.length <= 1 ) return;

        onNewCategory( value );
        setInputValue('');
    }

    return (
            <form onSubmit={ onSubmit } className='browser'>
                <input type='text'
                    placeholder='Buscar gifs'
                    value={ inputValue }
                    onChange={ onInputChange }
                />
                <button onClick={ () => {} }>Agregar</button>
            </form>
    )
}

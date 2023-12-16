import { useState } from 'react';
import { AddCategories, GifGrid } from './components'
import './themes/GifExpertApp.css';

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [] );

    const onAddCategory = ( newCategory ) => {

        if(  categories.includes( newCategory ) ) return;

        setCategories( [ newCategory, ...categories ] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategories onNewCategory={ onAddCategory } />

            {
                categories.map( ( category ) => 
                    <GifGrid key={ category } category={ category } />
                    )
            }
        </>
    );
}

export default GifExpertApp
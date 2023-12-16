import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    }, []); //| Cuando se dejan los corchetes vacíos significa que sólo se va a ejecutar una vez al renderizar el componente


    return {
        images,
        isLoading,
    }
}

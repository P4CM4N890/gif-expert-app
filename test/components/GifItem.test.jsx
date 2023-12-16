import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en GifItem', () => {

    const title = 'One Punch Man GIF';
    const url   = 'https://media0.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=9179ae8etwtm652xi57dbevkyr2vd6j4xka0mx0zeghl7fo1&ep=v1_gifs_search&rid=giphy.gif&ct=g';
    
    test('El componente debe ser igual a la snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();
    });

});
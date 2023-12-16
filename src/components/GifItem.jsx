
export const GifItem = ( { title, url } ) => {

    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ ( title.length > 1 ) ? title : 'Sin título' }</p>
        </div>
    );
}

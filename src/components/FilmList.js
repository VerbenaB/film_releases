import React from 'react'
import Film from './Film'

const FilmList = ({films}) => {

    const filmNodes = films.map((film) =>{
        return (<Film 
            key={film.id} 
            title={film.title}>
                </Film>)
                
    })

    return (
        <>
        {filmNodes}
        </>
    )
}

export default FilmList
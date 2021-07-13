import React, {useState } from 'react'
import FilmList from '../components/FilmList'
import Header from '../components/Header'
import Button from '../components/Button'


const FilmReleases = () => {

    const[films] = useState([
 
    {
        id: 1,
        title: <a href="https://www.imdb.com/title/tt4633694/?ref_=rlm">Spider-Man: Into the Spider-Verse</a>
      },
      {
        id: 2,
        title: <a href="https://www.imdb.com/title/tt5989218/?ref_=rlm">Life Itself</a>
      },
      {
        id: 3,
        title: <a href="https://www.imdb.com/title/tt2328900/?ref_=rlm">Mary Queen of Scots</a>
      }, 
      {
        id: 4,
        title: <a href="https://www.imdb.com/title/tt3513498/?ref_=rlm">The Lego Movie 2: The Second Part</a>
        
      },
      {
        id: 5,
        title:<a href="https://www.imdb.com/title/tt4154664/?ref_=rlm">Captain Marvel</a>
      }
    ])

    return (
        <>
            <Header/>
            <FilmList films={films} />
            <Button/>
        </>
        
    )
    
}

export default FilmReleases
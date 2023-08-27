import React from 'react'
import GenreComponent from './GenreComponent';
import MovieComponent from './MovieComponent';
import shop from '../../../public/shopping.jpeg'
import movie from '../../../public/diehard.png'
import funnyM from '../../../public/funnymarco.webp'

const movieData = [
  {
    'title': 'Die Hard',
    'year': 2014,
    'img': ''

  },
  {
    'title': 'Funny Marco',
    'year': 2023,
    'img': ''

  },
  {
    'title': 'Mad Max: Fury Road',
    'year': 2009,
    'img': ''

  },
  {
    'title': 'Josh Too Funny',
    'year': 2020,
    'img': ''

  }
]

const ContainerComponent = () => {
  return (
    <div className=' flex items-center justify-center flex-col  w-full min-h-screen  '>
      <div className="container flex flex-col md:flex-row w-full min-h-full bg-slate-200 md:items-start items-center justify-center mt-24">
      <GenreComponent
        name={'Action'}
        description={'Movies full of excitement and adrenaline-pumping sequences.'}
        movieTitle1={<MovieComponent img={movie} title={movieData[0].title} year={movieData[0].year} />}
        movieTitle2={<MovieComponent img={funnyM} title={movieData[1].title} year={movieData[1].year} />} />

      <GenreComponent
        name={'Comedy'}
        description={'Movies full of laughter excitement that will keep you entertain throughout.'}
        movieTitle1={<MovieComponent img={movie} title={movieData[2].title} year={movieData[2].year} />}
        movieTitle2={<MovieComponent img={movie} title={movieData[3].title} year={movieData[3].year} />} />
      </div>
      
    </div>
  )
}



export default ContainerComponent;
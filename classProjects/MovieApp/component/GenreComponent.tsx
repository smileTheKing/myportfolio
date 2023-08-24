import React from 'react'

const GenreComponent = (props:any) => {
  const { name, description, movieTitle1, movieTitle2 } = props;
  return (
    <div className="flex flex-col h-full gap-4  p-8">
      <h1 className=' font-bold'>{name}</h1>
      <h2>{description}</h2>
      <ul className=' flex flex-col h-full gap-4'>
        <li>{movieTitle1}</li>
        <li>{movieTitle2}</li>
      </ul>
    </div>
  )
}

//const styles = new StyleSheet()



export default GenreComponent;
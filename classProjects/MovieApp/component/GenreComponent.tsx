import React from 'react'

const GenreComponent = (props:any) => {
  const { name, description, movieTitle1, movieTitle2 } = props;
  return (
    <div className="flex flex-col min-h-screen w-screen items-start gap-4">
      <div className="p-4">
      <h1 className=' font-bold text-3xl text-slate-800'>{name}</h1>
      <h2 className=' font-bold text-slate-700'>{description}</h2>
      </div>
      
      <div className='flex flex-col h-full w-full items-start p-4 gap-4'>
        <div className='max-w-[50%]'>{movieTitle1}</div>
        <div className='min-w-[50%] '>{movieTitle2}</div>
      </div>
    </div>
  )
}

//const styles = new StyleSheet()



export default GenreComponent;
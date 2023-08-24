interface MovieProps{
  title: string,
  year:number,
 

}

const MovieComponent = ({title,year}:MovieProps) => {
 return (
   <div className="max-w-[160px] h-[200px] rounded-md overflow-hidden p-4  justify-end flex flex-col" style={{ backgroundColor:"rgba(100 ,116 ,139, 0.3)"}}>

     <h1>{title}</h1>
     <h2>{year}</h2>
   </div>
 )
}



export default MovieComponent;
import Image from "next/image";

interface MovieProps {
  title: string,
  year: number,
  img: any

}

const MovieComponent = ({ title, year, img }: MovieProps) => {
  return (
    <div className="  overflow-hidden rounded-md shadow-xl justify-end flex flex-col  bg-white" style={{maxHeight:400}} >
     
        <div className=" overflow-hidden " >
        <Image src={img} alt={"poster"} width={200} height={200} objectPosition="center" layout="responsive" />
        </div>
      

  
      <div className=" z-10 p-4">
          <h1 className=" font-serif font-bold  text-xl text-slate-800">Title: {title}</h1>
          <h2 className=" font-serif font-bold text-md text-slate-500">Year: {year}</h2>
          <h2 className=" font-serif font-bold text-md text-slate-500">Description: {year}</h2>
          <h2 className=" font-serif font-bold text-md text-slate-500">Rating: {year}</h2>
        </div>
    </div>
  )
}



export default MovieComponent;
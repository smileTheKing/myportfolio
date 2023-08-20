
import SectionComponent from '@/components/SectionComponent'
import HeroComponent from './../components/HeroComponent'
import FooterComponent from '@/components/FooterComponent'


export default function Home() {
  return (
    <>
      <main className=" min-h-screen flex flex-col items-center justify-start mb-24">
        <div className='container  flex  flex-col gap-12  p-24'>
          {/**Hero Component */}
          < HeroComponent />
          <SectionComponent />
        </div>
      </main>
    </>
  )
}
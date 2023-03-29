import { ReactElement, ReactNode } from 'react'
import { cargo } from '../Navmenu/data'

const Intro = (): ReactElement => {
  const first: ReactNode = (
    <img
      className='w-full h-full absolute left-0 top-0 -z-20'
      src={cargo}
      alt=''
    />
  )
  const second: ReactNode = (
    <article className='flex flex-col items-start gap-2 w-full h-full'>
      <header className='w-[248px] h-[23px] flex items-center bg-navyShade bg-opacity-50 gap-[9px]'>
        <div className='bg-gradientYellow w-1 h-full'></div>
        <p className='font-rubik text-sm leading-[17px] text-white'>
          Logistics & Supply Chain Solutions
        </p>
      </header>
      <footer className='flex flex-col items-start gap-8 w-full h-[375px]'>
        <div className='flex flex-col items-start gap-[6px]'>
          <h1 className='font-rubik font-bold text-[60px] leading-[71px] text-white'>
            Your Gateway to any Destination in the World
          </h1>
          <p className='font-krub font-[500] text-base leading-[24px] text-white'>
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.{' '}
          </p>
        </div>
        <button className='btn btn__yellow'>
          <div className='btn__yellow--white'></div>
          <span className=' text-blackShade'>Explore More</span>
        </button>
      </footer>
    </article>
  )

  const content: ReactElement = (
    <section className='w-full pl-[360px] pr-[980px] pt-[411px]  pb-[218px] h-[1035px] relative'>
      {first}
      {second}
    </section>
  )
  return content
}

export default Intro

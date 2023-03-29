import { ReactElement, ReactNode, useState } from 'react'
import { data, ImgType, links, socials } from './data'
import { AiOutlineDown } from 'react-icons/ai'

const Navmenu = (): ReactElement => {
  const [value, setValue] = useState<string>('Home')
  const { Logo, cargo, IconClock, IconMail, IconPhone }: ImgType = data

  const first: ReactNode = (
    <section className='w-full h-[160px] grid place-items-center bg-deepblu'>
      <div className='flex items-center gap-[244px] w-[1199.13px] h-[68px]'>
        <div>
          <img src={Logo} alt='transitflow' />
        </div>
        <div className='flex justify-end items-center gap-[39px] w-[745px] h-full py-[2.5px]'>
          <section className='w-[256px] h-full flex justify-between items-center'>
            <img src={IconClock} alt='' />
            <span className='font-krub font-[500] text-sm leading-[19px] text-white w-[176px] h-10'>
              Mon - Sat 9.00 - 18.00 Sunday Closed
            </span>
          </section>
          <section className='w-[227px] h-full flex justify-between items-center'>
            <img src={IconMail} alt='' />
            <span className='font-krub font-[500] text-sm leading-[19px] text-white w-[150px] h-[38px'>
              Email contact@logistics.com
            </span>
          </section>
          <section className='w-[184px] h-full flex justify-between items-center'>
            <img src={IconMail} alt='' />
            <span className='font-krub font-[500] text-sm leading-[19px] text-white w-[107px] h-[57px'>
              Email contact@logistics.com
            </span>
          </section>
        </div>
      </div>
    </section>
  )

  const second: ReactNode = (
    <section className='w-full h-[78px] bg-deepblu bg-opacity-25 flex justify-center'>
      <nav className='flex items-center gap-[277px] w-[1197.99px] h-full'>
        <ul className='flex items-center gap-[30px] w-[504px] h-full text-white'>
          {links.map((item, index): ReactNode => {
            return (
              <li
                onClick={() => setValue(item.title)}
                className={`h-full flex items-center gap-[30px] ${
                  item.title === value && 'border-b-2 border-white'
                }`}
                key={index}>
                <div
                  className={`w-[19px] h-0 border bg-[rgba(255,255,255,0.2)] rotate-[-90deg] ${
                    item.title === 'Home' && 'hidden'
                  }`}></div>
                <a
                  className='flex items-center gap-[5px] font-krub font-semibold text-base leading-[135.02%]'
                  href={item.url}>
                  {item.title}{' '}
                  <span className={`${item.title !== 'Pages' && 'hidden'}`}>
                    <AiOutlineDown />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <nav className='flex justify-end items-center gap-[50px] w-[416.99px] h-full'>
        <ul className='flex justify-end items-center gap-8 w-[150.99px] h-[19.42px]'>
          {socials.map((item, index): ReactNode => {
            return (
              <li key={index}>
                <a className='text-white' href={item.url}>
                  {item.icon}
                </a>
              </li>
            )
          })}
        </ul>
        <button className='flex justify-center items-center py-7 px-[52px] gap-[10px] bg-white w-[216px] h-full'>
          <span className='font-krub font-semibold text-base leading-[135.02%] text-center text-[#23212a]'>
            Request Quote
          </span>
        </button>
      </nav>
    </section>
  )

  const content: ReactElement = (
    <header className='fixed top-0 left-0 w-full flex flex-col h-[238px] z-40'>
      {first}
      {second}
    </header>
  )

  return content
}

export default Navmenu

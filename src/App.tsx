import { ReactElement } from 'react'
import { Intro, Navmenu } from './component'

const App = (): ReactElement => {
  return (
    <>
      <Navmenu />
      <main className='w-full'>
        <Intro />
      </main>
    </>
  )
}

export default App

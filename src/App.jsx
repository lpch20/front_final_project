import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChekIn from "./Pages/ChekIn";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <ChekIn></ChekIn>
    </>
  )
}

export default App

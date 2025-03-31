import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [secount_reverse, rev] = useState(0)

  return (
    <>
    <div>
      <h1 className='text-9xl font-extrabold'>This is harsh pancholi </h1>
        <h1 className='text-3xl font-mono'>Lets count with me</h1>
      <span className='flex items-center justify-center'>
        <br />
        <br />
        <button onClick={() => setCount((count) => count - 1)} className='bg-red-500 text-white p-3 rounded-lg text-5xl'>
          <h1>-</h1>
        </button>
        <h1 className='text-4xl'>{count}</h1>
        <button className='bg-red-500 text-white p-3 rounded-lg text-5xl' onClick={() => setCount((count) => count + 1)}>+</button>
      </span>
    </div>
   
    </>
  )
}

export default App

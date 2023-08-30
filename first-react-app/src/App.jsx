import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Heading color='magenta' text={"the quick brown"} fontSize='20px' />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      {/* <ListPicker values={[1, 2, 3]} /> */}
      {/* <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} />
      <Die /> */}

      {/* <Greeter person="Bill" from="Jose" />
      <Greeter person="Sars" from="Sam" />
      <Greeter person="Mars" from="Dean" /> */}
    </div>


    // <Chicken />

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React + Hello</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App

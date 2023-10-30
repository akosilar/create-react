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
import ColorList from './ColorList'
import Slots from "./Slots"
import ShoppingList from './ShoppingList'
import PropertyList from '../PropertyList'
import Clicker from './Clicker'
import Form from './Form'

const data = [
  { id: 1, item: 'eggs', quantity: 12, completed: false },
  { id: 2, item: 'milk', quantity: 1, completed: true },
  { id: 3, item: 'chicken breasts', quantity: 4, completed: false },
  { id: 4, item: 'carrots', quantity: 6, completed: true }

]
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {
        <Form />
        // <Clicker />
        // <PropertyList properties={properties} />
        // <ShoppingList items={data} />
      }
      {/* <Heading color='magenta' text={"the quick brown"} fontSize='20px' />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <Slots val1="1" val2="2" val3="3" />
      <Slots val1="3" val2="3" val3="3" />
 */}

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

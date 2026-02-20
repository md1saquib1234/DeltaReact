import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import Ticket from './Ticket'

function App() {
 

  return (
    <>
    <Ticket ticket={[0, 1, 2]}></Ticket>
    <Ticket ticket={[0, 1, 2, 3, 4,]}></Ticket>
     
    </>
  )
}

export default App

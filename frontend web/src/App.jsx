

import './App.css'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [jokes , setjokes] = useState([]);

  useEffect (() => {
    axios .get('http://localhost:3000/jokes')
    .then((Response) => {
      setjokes(Response.data)
    })
    .catch((rror) => {
      console.log(error)
    })

  })

  return (
    
    
    <>
    <h1> Chai or full stack </h1>
    <p>JOKES : {jokes.length}</p>

    {
      jokes.map ((joke ,index ) => {
        <div>key = {joke.id}
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
        </div>
        
      })
    
}
    </>
  )
}

export default App

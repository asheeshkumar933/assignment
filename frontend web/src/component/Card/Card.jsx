import { useEffect, useState } from 'react'
import axios from 'axios'


function Card() {
  const [jokes , setjokes] = useState([]);

  useEffect (() => {
    axios.get('/api/jokes')
    .then((Response) => {
      console.log(Response)
      setjokes(Response.data)
    })
    .catch((error) => {
      console.log(error)
    })

  },[])

  return (
    
    
    <>
    <h1> Chai or full stack </h1>
    <p>JOKES : {jokes.length}</p>

    {
      jokes.map ((joke ) => (
        <div>key = {joke.id}
        <h3> {joke.title}</h3>
        <p>{joke.content}</p>
        </div>
        
      ))
    
}
    </>
  )
}

export default Card

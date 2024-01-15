import { useEffect, useState } from 'react'
import axios from 'axios'


function Card() {
  const [jokes, setjokes] = useState([]);



  // axios.get('https://api.github.com/users/asheeshkumar933')
  // axios.get('https://api.escuelajs.co/api/v1/products')
  //  axios.get('https://jsonplaceholder.typicode.com/posts')
  //  .then((Response) => setjokes(Response.data))
  //  .catch((error) => console.log(error))

  useEffect(() => {
    // axios.get('/api/jokes')
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then((Response) => {
        setjokes(Response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })





  return (


    <>
      <h1> Chai or full stack </h1>
      <p> JOKES : {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div
            className=''
            key={joke.id}>

            <div className="w-[300px] rounded-md border  ">

              {/* <div className=''>
                <img

                  src={joke.images}
                  alt={joke.title}
                  className="h-[200px] w-full rounded-md object-cover   "
                />


                <h1 className="text-lg font-semibold">{joke.title}</h1>
                <p className="mt-3 text-sm text-gray-600">
                  price :{joke.price}
                </p>
              </div> */}

              {/* <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((joke) => (
                  <div  className="border">
                    <img src={joke.images} className="aspect-video w-full rounded-md" alt="" />
                    <div className="min-h-min p-3">
                     
                      <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{joke.title}</p>
                      <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                        {joke.description}
                      </p>
                      <div className="mt-4 flex space-x-3 ">
                        <img className="h-full w-10 rounded-lg" src={post.avatar} alt={post.author} />
                        <div>
                          <p className="text-sm font-semibold leading-tight text-gray-900">
                            {joke.price}
                          </p>
                          <p className="text-sm leading-tight text-gray-600">{post.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
              
            </div>
          </div>


            
        
        ))
}

    </>
  )
}

export default Card

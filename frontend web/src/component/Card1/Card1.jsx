import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
//************************************************************ 

export function ProductThree() {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-md border">
          <img
            src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">Nike Airmax v2</h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Sneakers
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Nike
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Airmax
              </span>
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Colors : </span>
              <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
              <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
              <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
            </div>
            <div className="mt-5 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Size : </span>
              <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                8 UK
              </span>
              <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                9 UK
              </span>
              <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                10 UK
              </span>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

//****************************************************************** */






function Card() {
  const [jokes, setjokes] = useState([]);

  // axios.get('https://api.github.com/users/asheeshkumar933')
  // axios.get('https://api.escuelajs.co/api/v1/products')
  //  axios.get('https://jsonplaceholder.typicode.com/posts')
  //  .then((Response) => setjokes(Response.data))
  //  .catch((error) => console.log(error))

  useEffect(() => {
    // axios.get('/api/jokes')
    axios.get("http://fakestoreapi.com/products")
    // axios.get('https://api.escuelajs.co/api/v1/products')


      .then((Response) => {
        setjokes(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1> chai or code </h1>
      <p>{jokes.length}</p>

      

        <div className="grid gap-6 gap-y-10 py-6 grid-cols-2 lg:grid-cols-3">
          {
          jokes.map((joke) => (

            <div 
            key={joke.id}
            className="w-[300px] rounded-md border">
              <img
              width={300}
                className="h-[200px] w-full rounded-md object-cover"
                src={joke.image}
               
                alt="Laptop"/>
              
               <h1 className="text-lg font-semibold">{joke.title}</h1>
               
               <p className="mt-3 text-sm text-gray-600">price :{joke.price}</p>
            </div>
            ))
          }
          
        
        </div >
        
      
          


    </>
  );
}
export default Card;


/* 
const products = [
  {
    id : 1,
    category: 'men' ,
    productname:'shirt',
    title:'Men Blue & White Slim Fit Striped Casual Sustainable Shirt',
    price:499,
    description:'',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAROYmYqLkZaAEDWDlwTRHUBWp_5z-93oJIZ6csFbpmJuGTULmuUCy1JCvxXxRf8ga4nZ_GvG0Nfbznz3kBvxJvUD1HKALyrRJyr9Gt4Ru0asBhoT0ABm9bA5-E9qxYh_7ciX8hsGvXg&usqp=CAc',


  },
  {
    id : 2,
    category: 'men' ,
    productname:'shirt',
    title:'Dennis Lingo Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves ',
    price:599,
    description:'',
    image: 'https://m.media-amazon.com/images/I/61rAYU1RnOL._SX569_.jpg',


  },
  {
    id : 3,
    category:' men' ,
    productname: 'shirt' ,
    title:'Dennis Lingo Men's Solid Slim Fit Cotton Casual',
    price:481 ,
    description:
    image: 'https://m.media-amazon.com/images/I/61XzMtVz3PL._SY606_.jpg',


  },
  {
    id : 4,
    category: 'men ',
    productname:'shirt',
    title:'full sleve ',
    price:549,
    description:
    image: 'https://m.media-amazon.com/images/I/61XzMtVz3PL._SY606_.jpg',


  },
  {
    id : 5,
    category: 'men' ,
    productname:'shirt',
    title:'Dennis Lingo Men's Solid Slim Fit Cotton Casual',
    price:599,
    description:
    image: 'https://m.media-amazon.com/images/I/51smAeTCuFL._SX569_.jpg',


  },
  {
    id : 6
    category: 'men' ,
    productname: 'shirt' ,
    title: ' Men's Casual Shirts',
    price:499,
    description:
    image: 'https://m.media-amazon.com/images/I/61Ma2zgB7qL._SX569_.jpg',


  },
  {
    id :7, 
    category:' men' ,
    productname:'shirt',
    title:'Jack & Jones Men Shirt',
    price:699,
    description:
    image: 'https://m.media-amazon.com/images/I/717HOhHVvXL._SX466_.jpg',



  },
  {
    id : 8
    category: 'men' ,
    productname:'shirt',
     title:'Jack & Jones Men Shirt',
    price:899 ,
    description:
    image: 'https://m.media-amazon.com/images/I/51aQ6Ar1aZL._AC_UL480_FMwebp_QL65_.jpg',

     

  },
  {
    id : 9 ,
    category: 'men' ,
    productname:'shirt',
    title:'Men's Cotton Buffalo Check Slim Fit Casual Shirt with Pocket, Full'
    price:899
    description:
    image: 'https://m.media-amazon.com/images/I/61X9WBQlceL._AC_UL480_FMwebp_QL65_.jpg',


  },
  {
    id : 10,
    category:' men' ,
    productname:'shirt',
    title:'Men's Poly Cotton Digital Printed Stitched Half Sleeve Shirt',
    price:399 ,
    description:
    image: 'https://m.media-amazon.com/images/I/717Qr4ImV+L._AC_UL480_FMwebp_QL65_.jpg',


  },
  {
    id : 11,
    category: men ,
    productname:
    title:
    price:
    description:
    image: 


  },
  {
    id : 12,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 13,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 14,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 15,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 16,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 

  },
  {
    id : 17,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 18,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 19,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 20,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 21,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 22,
    category:men  ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 23,
    category:men  ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 24,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 25,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 26,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 27,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 28,
    category:men  ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 29,
    category:men  ,
    productname: 
    title:
    price:
    description:
    image: 


  },
  {
    id : 30,
    category: men ,
    productname: 
    title:
    price:
    description:
    image: 


  },
]


*/


import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import Filter from "../Filter/Filter.jsx";

const sidefilters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "men", label: "Men" },
      { value: "women", label: "Women" },
      { value: "baby kids", label: "Baby & Kids" },
      { value: "mix", label: "Men & Women" },
    ],
  },
  // {
  //   id: "color",
  //   name: "Color",
  //   options: [
  //     { value: "white", label: "White" },
  //     { value: "beige", label: "Beige" },
  //     { value: "blue", label: "Blue" },
  //     { value: "brown", label: "Brown" },
  //     { value: "green", label: "Green" },
  //     { value: "purple", label: "Purple" },
  //   ],
  // },

  // {
  //   id: 'sizes',
  //   name: 'Sizes',
  //   options: [
  //     { value: 'xs', label: 'XS' },
  //     { value: 's', label: 'S' },
  //     { value: 'm', label: 'M' },
  //     { value: 'l', label: 'L' },
  //     { value: 'xl', label: 'XL' },
  //     { value: '2xl', label: '2XL' },
  //   ],
  // },
];

function Card() {
  const [product, setproduct] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const [search, setsearch] = useState("");
  const [show, setshow] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setloading(true);
        seterror(false);
        const Response = await axios.get("/api/product?search=" + search, {
          signal: controller.signal,
        });

        setproduct(Response.data);
        setloading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("Request canceled ", error.message);
          return;
        }
        seterror(true);
        setloading(false);
      }
    })();
    // cleanUp
    return () => {
      controller.abort();
    };
  }, [search]);

  // if(error){
  //   return <h1>Something wend wronge</h1>
  // }
  // if (loading) {
  //   return <h1>Loading...</h1>
  // }








  // axios.get('https://api.github.com/users/asheeshkumar933')
  // axios.get('https://api.escuelajs.co/api/v1/products')
  //  axios.get('https://jsonplaceholder.typicode.com/posts')
  //  .then((Response) => setjokes(Response.data))
  //  .catch((error) => console.log(error))

 






  return (


    <>

      <div className="mt-4 items-center ">
        <h1 className="text-3xl"> DISCOVER OUR PRODUCTS </h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta.
          Lorem ipsum <br /> dolor sit amet, consectetur adipisicing elit.
          Corrupti, nulla doloremque?
        </span>
      </div>
      <hr className="p-4 mt-4 " />
      <div className="flex justify-between">
        <div className="flex justify-start gap-20">
          <p className="hidden md:block">ITEMS:{product.length}</p>
          {/* <input
            type="search"
            placeholder=" Products search"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          /> */}

          <button onClick={() => setshow(!show)}>Filter</button>
        </div>

        <div>
          <select name="Recomended" id="">
            <option value=""> Recomneded</option>
            <option value="">love</option>

            <option value="">High to low </option>
            <option value="">Low to high</option>
          </select>
        </div>
      </div>
      <hr className="p-3 mt-4" />

      {loading && <h1>Loading..</h1>}
      {error && <h1>Something went wronge</h1>}

      {/* //***************************PRODUCTS PAGE ***************************  */}

      <div
        className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 
          py-10 grid-cols-2 md:grid-cols-3 md:gap-6 md:space-y-0 lg:grid-cols-4 bg-slate-300"
      >
        {show ? (
          <div className="   ">
            <section className="">
              <div className="">
                {sidefilters.map((filter) => (
                  <div key={filter.id} className="">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {filter.name}
                    </h3>
                    <ul className="mt-2">
                      {filter.options.map((option) => (
                        <li
                          key={option.value}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex items-center">
                            <input
                              onChange={(e) => setsearch(e.target.value)}
                              id={`${filter.id}-${option.value}`}
                              name={`${filter.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                            />
                            <label
                              htmlFor={`${filter.id}-${option.value}`}
                              className="ml-3 text-sm font-medium text-gray-900"
                            >
                              {option.label}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : null}

        {product.map((productitems, index) => (
          <div key={index} className="rounded-md border">
            <img
              src={productitems.img}
              alt={productitems.title}
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h5 className="inline-flex items-center text-lg font-semibold">
                {productitems.title}
              </h5>
              <p className="mt-3 text-sm text-gray-600">Price:{productitems.Price}</p>
            </div>
          </div>
        ))}
      </div>
      {/*  ******************************** END PRODUCTS PAGE*********************** * */}
    </>
  );
}
export default Card;



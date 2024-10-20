import React, { useEffect, useState } from 'react';
import "./Home.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoCartSharp } from "react-icons/io5";

const Home = () => {

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(`https://fakestoreapi.com/products/`)

  useEffect(() => {

    const fetchData = async () => {

      try {

        const { data } = await axios.get(`${url}`);

        setResult(data);
        setLoading(false);

        console.log(data);

      } catch (error) {
        console.log(error);
      }

    }

    fetchData();

  }, [loading,url]);

  return (
    <>

      {
        loading
          ?
          <>
            <div className='w-full h-full mt-24 mb-24 flex justify-center items-center'>
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-red-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
          :

          <>

            <div className='flex flex-wrap justify-evenly items-center mt-5'>

              <div>
                <p className='text-left  font-semibold text-md'>Filter By Categories :</p>
              </div>

              <div className='flex flex-wrap justify-center items-center'>
                <button
                  type="button"
                  className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() =>{
                    setUrl(`https://fakestoreapi.com/products/category/men's%20clothing`); 
                    setLoading(true); 
                  }}
                >
                  Men's Clothing
                </button>
                <button
                  type="button"
                  className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() =>{
                    setUrl(`https://fakestoreapi.com/products/category/women's%20clothing`); 
                    setLoading(true); 
                  }}
                >
                  Women's Clothing
                </button>
                <button
                  type="button"
                  className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() =>{
                    setUrl(`https://fakestoreapi.com/products/category/jewelery`); 
                    setLoading(true); 
                  }}
                >
                  Jewellery
                </button>
                <button
                  type="button"
                  className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() =>{
                  setUrl(`https://fakestoreapi.com/products/category/electronics`);
                  setLoading(true); 
                  }}
                >
                  Electronics
                </button>
                <button
                  type="button"
                  className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() =>{
                  setUrl(`https://fakestoreapi.com/products`);
                  setLoading(true); 
                  }}
                >
                  Clear all Filters
                </button>
              </div>

            </div>

            <section
              id="Projects"
              className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
            >

              {
                result.map((element) => (

                  <div key={element.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <Link to={`/product/${element.id}`}>
                      <img
                        src={element.image}
                        alt={element.title}
                        className="h-48 mx-auto object-contain rounded-t-xl"
                      />
                      <div className="px-4 py-3 w-72">
                        <span className="text-gray-400 mr-3 uppercase text-xs">{element.category}</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">
                          {element.title}
                        </p>
                        <div className="flex items-center">
                          <p className="text-lg font-semibold text-black cursor-auto my-3">
                            ₹{element.price}
                          </p>
                          <div className="flex justify-center items-center ml-auto mt-2 ">

                            <button
                              type="button"
                              className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                              Buy Now
                            </button>

                            <IoCartSharp className='text-2xl text-red-500 mr-1' />

                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                ))
              }

            </section>
          </>
      }

    </>

  )
}

export default Home
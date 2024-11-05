import React, { useEffect, useState } from "react"
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import useRequestData from "../../Hooks/useRequestData";

const Todos = () => {

  const {makeRequest, isLoading, data, error} = useRequestData();

  const [completed, setCompleted] = useState(false)
  const [showAll, setShowAll] = useState(false)


  useEffect(() => {
 
    makeRequest("https://jsonplaceholder.typicode.com/todos/");
 
  }, []) 

  return (
    <div>

      <Title titleText="🥵👉👌Todo🍆🍑😩👉👌💦"/>

      { isLoading && <Loader /> }
      { error && <Error /> }

      {
        data && 
        <div className="flex justify-between px-10">

          <button onClick={(p) => {setCompleted(true); setShowAll(false)} }
            className='inline-block px-6 py-4 my-5 font-bold text-white rounded disabled:bg-slate-500 bg-emerald-500'>
            Completed
          </button>

          <button onClick={(p) => setShowAll(true) }
            className='inline-block px-6 py-4 my-5 font-bold text-white rounded disabled:bg-slate-500 bg-emerald-500'>
            Show all
          </button>

          <button onClick={(p) => {setCompleted(false); setShowAll(false)} }
            className='inline-block px-6 py-4 my-5 font-bold text-white rounded disabled:bg-slate-500 bg-emerald-500'>
            Incomplete
          </button>

        </div>
      }

      <div className="grid grid-cols-4 gap-4">
        {
          data && data
          .filter( (p) => showAll ? true: p.completed === completed)
          .map( p =>
            <div key={ p.id } className="p-5 border border-blue-500">
              <h2>{ p.title }</h2>
              <p>Udført: {p.completed.toString()}</p>
            </div>
          )
        }
      </div>

    </div>
    
  )
}

export default Todos
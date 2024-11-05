import React, { useEffect, useState } from "react"
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import useRequestData from "../../Hooks/useRequestData";

const Photos = () => {

  const {makeRequest, isLoading, data, error} = useRequestData();

  const [itemPerPage, setItemPerPage] = useState(20)

  const [currentStartIndex, setCurrentStartIndex] = useState(0)

  useEffect(() => {
 
    makeRequest("https://jsonplaceholder.typicode.com/photos/");
 
  }, []) 

  return (
    <div className="container">

      <Title titleText="Billeder 👉👈"/>

      { isLoading && <Loader /> }
      { error && <Error /> }

      {
        data &&
        <div className="flex justify-between px-10 mb-5">
          <button 
            onClick={() => setCurrentStartIndex( currentStartIndex - itemPerPage )}
            disabled={ currentStartIndex <= 0 }
            className='inline-block px-4 py-2 mt-10 font-bold text-white rounded disabled:bg-slate-500 bg-emerald-500'> 
            ← Previous
          </button>

        {
          data &&
          <select onChange={ (e) => { setItemPerPage ( +e.target.value ); setCurrentStartIndex(0) } }>
            <option value="20">20 pr side</option>
            <option value="10">10 pr side</option>
            <option value="5">5 pr side</option>
          </select>
        }

          <button 
            onClick={() => setCurrentStartIndex( currentStartIndex + itemPerPage )}
            disabled={ currentStartIndex >= ( data.length - itemPerPage ) } // 90 >= 100 - 10
            className='inline-block px-4 py-2 mt-10 font-bold text-white rounded disabled:bg-slate-500 bg-emerald-500'>
              Next →
          </button>
        </div>
      }
      
        <div className="grid grid-cols-4 gap-4">
          {
            data && data
            .slice( currentStartIndex, itemPerPage + currentStartIndex )
            .map( p =>
              <div key={ p.id } className="p-5 border border-blue-500">
                <h2>{ p.title }</h2>
                <p>{ p.url }</p>
                <img src={p.thumbnailUrl} />
              </div>
            )
          }
        </div>

    </div>
    
  )
}

export default Photos
import React, { useEffect, useState } from "react"
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import useRequestData from "../../Hooks/useRequestData";

const Todos = () => {

  const {makeRequest, isLoading, data, error} = useRequestData();

  useEffect(() => {
 
    makeRequest("https://jsonplaceholder.typicode.com/todos/");
 
  }, []) 

  return (
    <div>

      <Title titleText="Todo"/>

      { isLoading && <Loader /> }
      { error && <Error /> }

      <div className="grid grid-cols-4 gap-4">
          {
            data && data.map( p =>
              <div key={ p.id } className="p-5 border border-blue-500">
                <h2>{ p.title }</h2>
                <p>{String(p.completed)} <input type="checkbox" checked={p.completed} /></p>
              </div>
            )
          }
        </div>

    </div>
    
  )
}

export default Todos
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Title from "../../components/Title"

import useRequestData from "../../Hooks/useRequestData";

const PostDetails = () => {

  const { id } = useParams()

  const {makeRequest, isLoading, data, error} = useRequestData();
 
  useEffect(() => {
 
    makeRequest("https://jsonplaceholder.typicode.com/posts/" + id);
 
  }, [])

    // Vis alt indhold om den post hvis ID er send med hertil
    // Modtage id for udvalgt post
    // Request API efter fx /post/4

  return (
    <section> 
      <Title titleText={"Post detaljer"} />

      { isLoading && <Loader /> }
 
      { error && <Error /> }

      { data && 
        <div className='border border-blue-500'>
          {/* <h2 className='text-3xl'>{data.title}</h2> */}
          <Title titleText={data.title} />

          <p>ID:{data.id}</p>
          <p>{data.body}</p>
        </div>
      }

      {/* Postdetails ID der er klikket på: {id}  */}
      
      </section>
  )
}

export default PostDetails
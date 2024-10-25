import React, { useEffect } from 'react'
import Title from '../components/Title'
import Loader from "../components/Loader" 
import Error from "../components/Error" 

// vores request til api - hook
import useRequestData from '../hooks/useRequestData'

const Home = () => {

  const {makeRequest, isLoading, data, error} = useRequestData();
  
  useEffect(() => {
      makeRequest('https://jsonplaceholder.typicode.com/posts/')
  }, []) // [] er tomme så køre useEffect kun 1 gang - ved load af componet
  

  return ( //så laver man en return til at vise hvordan man vil opbygge siden
    <div className='container'>
        <Title titleText="Velkommen til min dungeon" textColor='hotpink' placement='center' />

        { isLoading && <Loader /> }
        { error && <Error />}

        {
          data && data.map(p => 
            <div key = { p.id }>
              <h1>{ p.title }</h1>
              <p>{ p.body }</p>
            </div>
          )
        }

    </div>
  )
}

export default Home
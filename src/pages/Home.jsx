import React, { useEffect } from 'react'
import Title from '../components/Title'
import useRequestData from '../hooks/useRequestData'

const Home = () => {

  const {makeRequest, isLoading, data, error} = useRequestData();
  
  useEffect(() => {
      makeRequest('https://jsonplaceholder.typicode.com/posts/')
    return () => {
    
    }
  }, [])
  

  return ( //så laver man en return til at vise hvordan man vil opbygge siden
    <div className='container'>
        <Title titleText="Velkommen til min dungeon" textColor='hotpink' placement='center' />
    </div>
  )
}

export default Home
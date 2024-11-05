import { useEffect, useState } from 'react'

import Error from '../../components/Error'
import useRequestData from '../../Hooks/useRequestData'

const Pilot = ( {url} ) => {
    
    const {makeRequest, isLoading, data, error} = useRequestData();

    useEffect( () => {

        makeRequest(url);
    
    } , [] ) 

    return (
    <>
        { error && <Error />}
        {
            data && 
            
            <span className='block'>
                {data.name}
            </span>
        }
    </>
  )
}

export default Pilot

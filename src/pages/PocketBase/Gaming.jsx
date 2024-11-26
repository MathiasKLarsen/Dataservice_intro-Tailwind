import React, { useEffect, useState } from 'react'

import Loader from '../../components/Loader'
import Error from '../../components/Error'
import Title from '../../components/Title'

import useRequestData from "../../Hooks/useRequestData";

const Gaming = () => {

    const {makeRequest, isLoading, data, error} = useRequestData();

    useEffect(() => {
 
        makeRequest("http://127.0.0.1:8090/api/collections/gaming/records");
     
      }, [])

  return (
    <section>

        <Title titleText="Gaming"/>
        { isLoading && <Loader /> }
        { error && <Error /> }

        <div className='grid grid-cols-4 gap-10'>
            { data &&
                data.items.map(item => 
                    <div className='flex flex-col gap-4 p-5 border border-blue-500'>
                        <h2><span className='text-lg font-bold'>Game Name:</span> {item.title}</h2>
                        <i><span className='text-lg font-bold'>Game Description:</span> {item.description}</i>
                        {/* <img src={ "http://127.0.0.1:8090/api/files/gaming/" + item.gaming.id + "/" + item.icon + "?thumb=50x50" } /> */}
                        <img src={item?.url} alt={item.title} className='object-scale-down w-full h-[150px]'/>
                        <p><span className='text-lg font-bold'>Title:</span> {item.categoryTitle}</p>
                    </div>
                )
            }
        </div>

    </section>      
  )
}

export default Gaming
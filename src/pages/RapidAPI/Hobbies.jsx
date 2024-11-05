import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

import useRequestData from '../../Hooks/useRequestData'

const Hobbies = () => {
    const {makeRequest, isLoading, data, error} = useRequestData();

    useEffect(() => {

        getNewHobby()
    
    } , []) 

    const getNewHobby = () => {
        
        makeRequest("https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies", "GET", {
            'x-rapidapi-key': 'db851aaba7msh946b18a7b6eb958p1ed192jsn4aa3480eee9d',
            'x-rapidapi-host': 'hobbies-by-api-ninjas.p.rapidapi.com'
        });
    }

    return (
        <section>
            <Title titleText="Få dig dog en hobby!"/>

            { isLoading && <Loader /> }
            { error && <Error /> }

            { data &&
                <div className='flex flex-col items-center p-10 my-10 bg-blue-200 border rounded-lg shadow-lg border-blue-950'>

                    <h2 className='mb-6 text-2xl font-bold'>
                        {data.hobby}
                    </h2>

                    <a href={ data.link } target='_blank'>
                        Læs mere om { data.hobby }
                    </a>

                    <button onClick={ () => getNewHobby()} className='w-1/4 px-4 py-2 mt-5 mb-10 mr-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
                        Nej tak - giv mig en anden hobby
                    </button>

                </div>
            }

        </section>
    )
}

export default Hobbies
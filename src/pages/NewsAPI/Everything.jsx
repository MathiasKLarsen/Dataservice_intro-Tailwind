import { useEffect, useState } from 'react'
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import useRequestData from "../../Hooks/useRequestData";

const Everything = () => {

    const {makeRequest, isLoading, data, error} = useRequestData();

    useEffect(() => {

      // apikey hentes fra .env-filen
      makeRequest( "https://newsapi.org/v2/everything?q=tennis&page=1&sortBy=popularity&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY )

    }, [])

    return (
      <div>
          <Title titleText="Nyheder fra NewsAPI (everything endpoint)"/>

          { isLoading && <Loader />}
          { error && <Error /> }

          { data && 

            <section>
              <h2> Der er {data.totalResults} nyder der matcher </h2>
              <div className='grid grid-cols-1 md:grid-cols-3 '>
                {
                  data.articles.map ( ( a,i ) =>
                    <div className='border p-5 m-5' key={ "news" + i }>
                      <h3 className='text-3xl'>{a.title}</h3>
                    </div>
                  )
                }
              </div>
            </section>
          }
      </div>
  )
}

export default Everything
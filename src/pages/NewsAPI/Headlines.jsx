import { useEffect, useState } from 'react'
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import useRequestData from "../../Hooks/useRequestData";

const Headlines = () => {
  
  const {makeRequest, isLoading, data, error} = useRequestData();

  useEffect(() => {

    // apikey hentes fra .env-filen
    makeRequest("")

  }, [])

  return (
      <div>

          { <Title titleText="Headlines NewsApi"/> }

          { isLoading && <Loader />}
          { error && <Error /> }

      </div>
  )
}

export default Headlines
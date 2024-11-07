import React, { useState, useEffect } from 'react'
import WeatherCard from './WeatherCard'

import Loader from '../../components/Loader'
import Error from '../../components/Error'
import Title from '../../components/Title'

import useRequestData from '../../hooks/useRequestData'

const OpenWeather = () => {

  const {makeRequest, isLoading, data, error} = useRequestData()
  const [zip, setZip] = useState( "5592" )

  useEffect(() => {
      let pattern = /[0-9]{4}/
      if( pattern.test(zip) ) {
      makeRequest("https://api.openweathermap.org/data/2.5/weather?zip=" + zip +  ",dk&lang=da&units=metric&appid=" + import.meta.env.VITE_APP_WEATHERKEY)
    }
  }, [zip] )

  return (
      <section>

          <Title titleText={"Vejret for dit postnummer"}/>
          { isLoading && <Loader /> }
          { error && <Error /> }

          <input 
            type="text" onChange={ (e) => setZip(e.target.value) } 
            placeholder='Indtast et validt postnummer' className='block px-3 py-2 border rounded shadow'>
          </input>

          { data && 
            <WeatherCard data={data}/>
          }
          
      </section>
  )
}

export default OpenWeather
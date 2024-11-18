import React, { useState, useEffect } from 'react'
import WeatherCard from './WeatherCard'

import Loader from '../../components/Loader'
import Error from '../../components/Error'
import Title from '../../components/Title'

import useRequestData from '../../hooks/useRequestData'
import postnumreJSON from './postnumre.json'

const OpenWeather2 = () => {

  const {makeRequest, isLoading, data, error} = useRequestData()
  const [zip, setZip] = useState( "8500" )

  useEffect(() => {
      let pattern = /[0-9]{4}/
      if( pattern.test(zip) ) {
      makeRequest("https://api.openweathermap.org/data/2.5/weather?zip=" + zip +  ",dk&lang=da&units=metric&appid=" + import.meta.env.VITE_APP_WEATHERKEY)
    }
  }, [zip] )

  return (
      <section>

          <Title titleText={"Vejret for dit postnummer 2"}/>
          { isLoading && <Loader/> }
          {error && <Error/>}

          <input 
            type="text" onChange={ (e) => setZip(e.target.value) } 
            placeholder='Indtast et validt postnummer' className='block px-3 py-2 border rounded shadow'>
          </input>

          <datalist id="postnumre">
              {
              postnumreJSON.map( p => <option value={ p.postnr } key={ p.postnr }>{ p.postnr } { p.by }</option>)
              }
            {
              /* <option value="8000">Århus</option>
              <option value="8500">Grenå</option>
              <option value="8400">Ebeltoft</option>
              <option value="5631">Ebberup</option> */
            }
          </datalist>

          {data && 
            <WeatherCard data={data}/>
          }
      </section>
  )
}

export default OpenWeather2
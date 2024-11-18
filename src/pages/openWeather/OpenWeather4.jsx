import React, { useState, useEffect } from 'react'
import WeatherCard from './WeatherCard'

import Loader from '../../components/Loader'
import Error from '../../components/Error'
import Title from '../../components/Title'

import LeafletMap from './LeafletMap'

import useRequestData from '../../hooks/useRequestData'

const OpenWeather4 = () => {

  const {makeRequest, isLoading, data, error} = useRequestData()
  const [zip, setZip] = useState( "7300" )

  // DAWA Request
  const {makeRequest:makeRequestDawa, isLoading:isLoadingDawa, data:dataDawa, error:errorDawa} = useRequestData()

  useEffect(() => {

    let pattern = /[0-9]{4}/
    if( pattern.test(zip) ) {
        // Hvis inputs value (Zip) overholder pattern (4 tal) så request vejret for valgte postnumre/zip
        makeRequest("https://api.openweathermap.org/data/2.5/weather?zip=" + zip.slice(0 , 4) +  ",dk&lang=da&units=metric&appid=" + import.meta.env.VITE_APP_WEATHERKEY)
    } else {
        // Hvis inputs value (zip) Ikke overholder... så hent postnummer forslag fra DAWA
        makeRequestDawa("https://api.dataforsyningen.dk/postnumre/autocomplete?q=" + zip) 
    }
  }, [zip] )

  return (
      <section>

          <Title titleText={"Vejret for dit postnummer 4"}/>
          { isLoading && <Loader/> }
          {error && <Error/>}

          <h2>Skriv et PostNummer: {zip}</h2>
          <input 
              type="text" list='postnrlist' onChange={ ( e ) => setZip( e.target.value ) } 
              placeholder='Indtast et validt postnummer' className='block px-3 py-2 border rounded shadow'>
          </input>

              {/* <h2>Du har fået</h2> */}
          <datalist id="postnrlist">
             {
                 dataDawa && dataDawa.map ( p => 
                  <option value={ p.postnummer.nr } key={ p.postnummer.nr }>
                      { p.tekst }
                  </option>
              )    
             }
          </datalist>

          {data && 
            <WeatherCard data={data}/>
          }

          <LeafletMap />
      </section>
  )
}

export default OpenWeather4
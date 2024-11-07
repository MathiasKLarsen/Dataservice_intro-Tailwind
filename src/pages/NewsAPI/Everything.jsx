import React, { useEffect, useState } from 'react'
import newsparams from "./newsparameter.json"

import Loader from "../../components/Loader"
import Error from "../../components/Error"
import Title from "../../components/Title";

import useRequestData from "../../Hooks/useRequestData"

const Everything = () => {

  const { makeRequest, isLoading, data, error } = useRequestData();
  const [searchKey, setSearchKey] = useState("tennis")
  const [language, setLanguage] = useState("no")

  useEffect(() => {
    handleSearch();
  }, [])

  const handleSearch = ( e ) => {
    if ( e ) e.preventDefault()
    makeRequest( `https://newsapi.org/v2/everything?q="${searchKey}"&page=1&sortBy=popularity&language=${language}&apiKey=${import.meta.env.VITE_APP_NEWSAPIKEY}`
    );
  }

  return (

    <div className='container'>
      <Title titleText="Nyheder fra NewsAPI ( everything endpoint )" />
      <div className='container'>
          { isLoading && <Loader /> }
          { error && <Error /> }
          <div className='m-10'>
            <form onSubmit={ handleSearch }  className='flex items-end'>
              <div>
                <label className='block font-bold text-gray-700'>
                  Søg Nyheder
                  <input onChange={ ( e ) => setSearchKey( e.target.value ) }
                   defaultValue={searchKey}
                   type="text" placeholder='Skriv søgeord her...' className='block px-4 py-2 mt-4 leading-tight bg-white border border-gray-400 rounded shadow pr- hover:border-gray-500'/>
                </label>
              </div>

              <div>
              {/* vælg sprog */}        
                <label className='ml-4 font-bold'>
                    vælg sprog: 
                    <select 
                        onChange={ ( e ) => setLanguage( e.target.value ) }
                        defaultValue={ language }
                        className='block px-4 py-2 pr-8 mx-5 mt-4 leading-tight bg-white border border-gray-400 rounded shadow hover:border-gray-500 focus:outline-none'
                      >
                      { newsparams.language.map( l => <option key={ l.code } value={ l.code }>{ l.language }</option> ) }
                      {
                        /* 
                        <option value="ar">Arabic</option>
                        <option value="de">German</option>
                        <option value="en">Engelsk</option>
                        <option value="fr">France</option>
                        <option value="no">Norweigan</option> 
                        */
                      }
                    </select>
                </label>
              </div>
              <button className='block px-4 py-2 font-bold text-white rounded bg-emerald-500'>
                Søg
              </button>
            </form>
          </div>

          { data &&
            <div>
              <h2 className='font-bold text-center'>Der er { data.totalResults } nyheder der matcher</h2>
              <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                  data.articles
                  .filter( a => a.title !== "[Removed]" )
                  .map( ( a, i ) =>
                  <div className='m-5 border' key={ "news" + i }>  
                      <img src={ a.urlToImage } alt={"Foto: " + a.title} />
                    <div className='p-5 m-5 ' key={ "news" + i }>
                      <time>{ new Date ( a.publishedAt ).toLocaleString("da-DK", { year: "numeric", month: "long", day: "2-digit", hour: "numeric", minute: "2-digit" }) }</time>
                      <h3 className='mb-2 text-3xl'>{ a.title }</h3>
                      <p>{ a.content }</p>
                    </div>
                  </div>
                  )
                }
              </div>
            </div>
          }
      </div>
    </div>
  )
}

export default Everything
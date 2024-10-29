import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import PostCard from "./PostCard";
 
// vores request til api - hook
import useRequestData from "../../Hooks/useRequestData";
 
const Posts = () => {
 
  const {makeRequest, isLoading, data, error} = useRequestData();

  const [searchWord, setSearchWord] = useState("nisi")

  const [itemPerPage, setItemPerPage] = useState(10)

  const [currentStartIndex, setCurrentStartIndex] = useState(0)
 
  useEffect(() => {
 
    makeRequest("https://jsonplaceholder.typicode.com/posts");
 
  }, []) // [] er tomme så køre useEffect kun 1 gang - ved load af component
 
  return (
    <div className="container">
 
      {/* h1 fra Title.jsx */}
     
      <Title
        titleText="Posts fra JSONPlaceholder..."
      />

      <div>
        <input type="text" onChange={ (e) => setSearchWord(e.target.value) } 
        placeholder="søg et eller andet"  className="w-auto px-3 py-2 my-10 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
      </div>
      
      { isLoading && <Loader /> }
 
      { error && <Error /> }
 
      {
        data &&
        <select onChange={ (e) => { setItemPerPage ( +e.target.value ); setCurrentStartIndex(0) } }>
          <option value="10">10 pr side</option>
          <option value="20">20 pr side</option>
          <option value="50">50 pr side</option>
        </select>
      }

      {
        data &&

        <div className="mb-5">
          <button 
            onClick={() => setCurrentStartIndex( currentStartIndex - itemPerPage )}
            disabled={ currentStartIndex <= 0 }
            className='inline-block px-4 py-2 mt-10 font-bold text-white rounded disabled:bg-slate-500 bg-emerald-500'> 
            ← Previous
          </button>

          {
            [...Array( Math.ceil ( data.length / itemPerPage ) ) ].map( ( x, i ) =>
            <button
              onClick={ () => setCurrentStartIndex ( i * itemPerPage ) }
              key={ "btn" + i } className={'inline-block px-4 py-2 mx-2 mt-5 font-bold text-white rounded bg-emerald-500 hover:bg-emerald-700 ' + ( i * itemPerPage === currentStartIndex ? " border-2 border-blue-700" : null ) }>
              { i + 1 }
            </button>
            )
          }

          <button 
            onClick={() => setCurrentStartIndex( currentStartIndex + itemPerPage )}
            disabled={ currentStartIndex >= ( data.length - itemPerPage ) } // 90 >= 100 - 10
            className='inline-block px-4 py-2 mt-10 font-bold text-white rounded disabled:bg-slate-500 bg-emerald-500'>
              Next →
          </button>
        </div>
      }

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {
          data && data 
          
          // .filter(p => p.id > 10 && p.id < 17)
          // .filter(p => p.body.includes(searchWord))
          .slice( currentStartIndex, itemPerPage + currentStartIndex )
          .map(p =>
           
            <PostCard p={p} key={p.id} />
       
            // <div key={ p.id }>
            //   <h1>{ p.title }</h1>
            //   <p>{ p.body }</p>
            // </div>
       
          )
        }
      </div>
      
      {/* <img src={Img} alt="reactlogo" /> */}
 
    </div>
  )
}
 
export default Posts
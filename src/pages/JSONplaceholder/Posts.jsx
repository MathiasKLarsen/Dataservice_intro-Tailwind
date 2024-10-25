import React, { useEffect } from "react";
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import PostCard from "./PostCard";
 
// vores request til api - hook
import useRequestData from "../../Hooks/useRequestData";
 
const Posts = () => {
 
  const {makeRequest, isLoading, data, error} = useRequestData();
 
  useEffect(() => {
 
    makeRequest("https://jsonplaceholder.typicode.com/posts");
 
  }, []) // [] er tomme så køre useEffect kun 1 gang - ved load af component
 
  return (
    <div className="container">
 
      {/* h1 fra Title.jsx */}
     
      <Title
        titleText="Posts fra JSONPlaceholder..."
      />
 
      { isLoading && <Loader /> }
 
      { error && <Error /> }
 
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {
          data && data.map(p =>
           
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
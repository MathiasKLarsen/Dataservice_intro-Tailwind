import React from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {

    // Vis alt indhold om den post hvis ID er send med hertil
    // Modtage id for udvalgt post
    // Request API efter fx /post/4

    const { id } = useParams()

  return (
    <div> Postdetails ID der er klikket på: {id} </div>
  )
}

export default PostDetails
import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({p}) => {
  return (
    <div className='p-10 my-3 transition-all duration-700 border border-blue-500 shadow-md hover:scale-105 hover:shadow-slate-300 group hover:bg-tahiti-dark'>
        <h1 className='text-3xl group-hover:text-white text-tahiti-light'>{ p.title }</h1>
        <p className='p-4 my-3 border border-tahiti-dark group-hover:broder-white'>Post ID: {p.id}</p>
        <p>{ p.body.slice(0,80) } ... </p>
        <Link to = {"/postdetails/" + p.id} className='inline-block px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>Læs mere</Link>
    </div>
  )
}

export default PostCard
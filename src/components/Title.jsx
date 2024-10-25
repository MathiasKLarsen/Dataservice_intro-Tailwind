import React from 'react'

const Title = ({ titleText, textColor = "red", placement }) => {
  return (
    <h1 className='py-4 text-2xl md:text-3xl xl:text-5xl'>
        {titleText}
    </h1>
  )
}

export default Title
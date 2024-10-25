import React from 'react'
import Newsletter from "../components/Newsletter"
import Title from '../components/Title'


const Contact = () => {
  return (
    <div className="container">
        <Title titleText="Kontakt" textColor='red' />

        <Newsletter />

</div>
  )
}

export default Contact
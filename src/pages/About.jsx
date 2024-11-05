import React from 'react'
import Title from '../components/Title'
import smøg from '../assets/IMG/smøg.jpg'

const About = () => {

  return (
    <div className="container">
        <Title titleText="Om Firmaet 𝖜𝖔𝖒𝖕 𝖜𝖔𝖒𝖕" textColor='red' />
        {/* <img width= "400px" src={smøg} alt="ung gut der ryger en smøg, med solbriller på" /> */}
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Laudantium ducimus ratione, repudiandae porro, excepturi provident, 
            eaque dolorem nemo exercitationem rerum culpa dignissimos,
             vero explicabo dolorum consequuntur quos est ea sint.
        </p>
    </div>
  )

}

export default About
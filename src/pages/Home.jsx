import React from 'react'
import Doctors from "../components/Doctors"
import { doctorData } from '../helpers/Data'

const Home = () => {
  return (
    <div className='home-container'>
        <h1>Hospital</h1>
        <Doctors doctorData ={doctorData}/>
    </div>
  )
}

export default Home
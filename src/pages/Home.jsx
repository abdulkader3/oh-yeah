import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loveFORever } from '../Slices/Shanto'

const Home = () => {
  useEffect(()=>{axios.get('https://api.jsonbin.io/v3/b/666ffb8cacd3cb34a858ae39')
    .then((api)=>{prity(api.data.record)})
  })
  const dispatch = useDispatch()
  const [shanto , prity]=useState([])
  const navigate = useNavigate()
  const next = (ohYeah) => {
    navigate('/Nextpage')
    console.log(ohYeah)
    dispatch(loveFORever(ohYeah))
}

  return (
    <>
    <div className=" w-full h-full gap-[20px] bg-slate-700 flex flex-wrap justify-center items-center justify-evenly ">
      {
        shanto.map((apibox , chabi)=>(
        <div key={chabi} className=" w-[400px] h-[650px]  bg-white  flex flex-col items-center ">
          <div className="img w-[150px] h-[220px]  ">
             <img src={apibox.image} alt="photo" />
              </div>
              <div className=" font-black text-[25px] ">
              <h2>{apibox.name}</h2>
              </div>
              <div className="">
                <p> Brand :  {apibox.brand} </p>
                <p> Operating system :  {apibox.operating_system} </p>
                <p> Ram :  {apibox.ram} </p>
                <p> Storage :  {apibox.storage} </p>
                <p> Processor :  {apibox.processor} </p>
                <p> Display size :  {apibox.display_size} </p>
                <p> Display Refresh Rate :  {apibox.refresh_rate} </p>
                <p> Charging speed :  {apibox.charging_speed} </p>
                <p> Connectivity :  {apibox.support} </p>
                <p> Technology :  {apibox.technology} </p>
                <p> Sensor :  {apibox.sensor} </p>
              </div>
              <div className=" flex flex-col gap-[10px] m-5  ">
              <button onClick={()=>next(apibox)} className='bg-black rounded-[5px] text-white active:scale-125 p-3 hover:border-[2px] hover:border-[#000] hover:bg-transparent transition-all hover:text-[#000]' >View More</button>
              <button className='bg-black rounded-[5px] text-white active:scale-125 p-3 hover:border-[2px] hover:border-[#000] hover:bg-transparent transition-all hover:text-[#000]' > BUY NOW </button>
              </div>
        </div>
      ))
      }
    </div>      
    </>
  )
}

export default Home

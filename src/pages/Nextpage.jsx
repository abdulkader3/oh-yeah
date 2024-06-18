import React from 'react'
import { useSelector } from 'react-redux'

const Nextpage = () => {
    const shanto = useSelector((state)=> state.counter.value )
  return (
    <>
    <div className=" w-full h-full gap-[20px] m-[20px] ">
      <div className=" w-full h-[400px] flex  flex-wrap ">
        <div className="w-[400px] h-[100px]  ">
          <img src={shanto.image} alt="photo" />
        </div>
        <div className="taital font-black text-[50px] flex w-full justify-center ">
          <h2> {shanto.name} </h2>
        </div>
        <div className=" flex w-full items-center font-semibold text-[25px] gap-5 flex-col ">
                <p> Brand :  {shanto.brand} </p>
                <p> Operating system :  {shanto.operating_system} </p>
                <p> Ram :  {shanto.ram} </p>
                <p> Storage :  {shanto.storage} </p>
                <p> Processor :  {shanto.processor} </p>
                <p> Display size :  {shanto.display_size} </p>
                <p> Display Refresh Rate :  {shanto.refresh_rate} </p>
                <p> Charging speed :  {shanto.charging_speed} </p>
                <p> Connectivity :  {shanto.support} </p>
                <p> Technology :  {shanto.technology} </p>
                <p> Sensor :  {shanto.sensor} </p>
                <button  className='bg-black rounded-[5px] text-white active:scale-125 p-3 hover:border-[2px] hover:border-[#000] hover:bg-transparent transition-all hover:text-[#000]' > BUY NOW </button>
        </div>         
      </div>
    </div> 
    </>
  )
}

export default Nextpage

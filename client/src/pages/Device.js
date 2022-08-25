import React, { useState, useEffect } from 'react'
import './Device.css'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceApi'

export const Device = () => {

  const [device, setDevice] = useState({info:[]}) 
  const {id} = useParams()

  useEffect (() => {
    fetchOneDevice(id).then(data => setDevice(data))
  },[])

  // { id: 2, name: "Experia 5", price:1500, rating: 5, img: 'https://i.pinimg.com/originals/87/b5/03/87b50332946770f994dc01f1566d930e.gif'} 
//   const description = [
//     // {id: 1, title: 'RAN Memory', description: '5 Gb' },
// //     {id: 2, title: 'Camera', description: '12Mpx'},
//     // {id: 3, title: 'Processor', description: "Pentium 3"},
//     // {id: 4, title: 'Quantity of core', description: '2' },
//     // {id: 5, title: 'Batery', description: '4000mA'}
//   ]
if (device.img) {
  return (
    <div>
        <div className='devicePageHeader'>
          <div><img src = {process.env.REACT_APP_API_URL + 'api/' + device.img} /></div>
          
          <div>
            <h3>{device.name}</h3>
            rating: {device.rating}
          </div>
          
          <div>
            <h4>Price</h4>
            <h3>
              {device.price}
            </h3>
            <button> Add to bucket </button>
          </div>
        
        </div>

        <div>
          {device.info.map(info => 
            <div key = {info.id}>
              <span style={{fontWeight: 'bold', margin: '5px',}}>{info.title}:</span>
              {info.description} 
            </div>)}
        </div>
    </div>
  )}
  else {return <div></div>}
}

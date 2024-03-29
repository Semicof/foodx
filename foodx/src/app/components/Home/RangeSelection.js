import React, { useState } from 'react'

function RangeSelection() {
    const [radius,setRadius] = useState(10);
  return (
    <div className='w-full p-4'>
        <h2>Select range (meter) </h2>
        <input type='range' 
        className='w-full h-2 cursor-pointer '
        min={10}
        max={500}
        step={10}
        onChange={(e)=>setRadius(e.target.value)}
        defaultValue={10}
        />
        <label>{radius*10} m</label>
    </div>
  )
}

export default RangeSelection
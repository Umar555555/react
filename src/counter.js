import React from 'react'
import './counter.css'
import { useState , useEffect } from 'react'

const Counteradd = ({counter}) => {
    const [item, setitem] = useState([])
    useEffect(()=>{
        const newItem = counter()
        setitem(newItem)        
    }, [counter])
  return (
    <ul>
      {item.map((item)=>(
        <li key={item}>{item}</li>
      ))}  
    </ul>
  )
}

export default Counteradd
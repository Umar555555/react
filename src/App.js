import { useState, useRef } from 'react'
import './App.css'
import Counteradd from './counter'

function Apps() {
  const [val, setVal] = useState('')
  const [pass, setPass] = useState('')
  const cvcRev = useRef(null)
  const passwordRev = useRef(null)
  const refInput = (e)=>{
    const value = e.target.value
    setVal(value)
    if(value.length === 8){
      cvcRev.current.focus()
    }
  }
  const refPassword = (e)=>{
    const passValue = e.target.value 
    setPass(passValue)
    if(passValue.length === 3){
      passwordRev.current.focus()
    }
  }
  return (
    <div className="w-50 mt-5 bg-dark mx-auto p-3">
      <form>
        <input value={val} onChange={refInput} type="text" className='form-control' placeholder='Card Number'/>
        <input value={pass} onChange={refPassword} ref={cvcRev} type="text" className='form-control mt-2' placeholder='Cvc Number'/>
        <input ref={passwordRev} type="password" className='form-control mt-2' placeholder='Paswword'/>
      </form>
    </div>
  )
}

function App(){
    const [count, setcount] = useState(0)
    const setCountInc = ()=>{
        setcount((prev) => prev + 1)
    }
    const setCount = ()=>{
        setcount((prevs) => prevs = 0)
    }
    const counter = ()=>{
        return new Array(count).fill('').map((_, idx)=> `Counter number ${idx + 1}`)
    }
    return (
        <div>
            <div className='mx-auto w-50 bg-dark text-light text-center mt-2 p-4 d-flex flex-column align-items-center'>
                <h1 className={`${count > 0 ? 'text-success' : 'text-danger'}`}>{count}</h1>
                <div className="d-flex gap-2">
                <button onClick={setCountInc} className='btn btn-success'>+</button>
                <button onClick={setCount} className='btn btn-danger'>0</button>
                <div className='text-light'></div>
                </div>
                <Counteradd counter={counter} /> 
            </div>
            <Apps />
        </div>
  )
}

export default App
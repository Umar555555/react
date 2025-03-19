import { useState } from 'react'
import './App.css'
function User(){
    const [count, setcount] = useState(0)
    const [istrue, ontrue] = useState(false)

    const onIncrement = ()=>{
        setcount((prevStates)=> prevStates + 1)
    }

    const onDecrement = ()=>{
        setcount((prevStatese)=> prevStatese - 1)
    }

    const restart = ()=>{
        setcount(0)
    }

    const showModal = ()=>{
        ontrue((item)=> item = true)
    }

    const hideModal = ()=>{
        ontrue((items)=> items = false)
    }

    const data = [
        {firstname : "Abdullox", link : "https://youtube.com", key : 1},
        {firstname : "Umarxon", link : "https://youtube.com", key : 2}
    ]
    return(
        data.map((item)=>{
            return(
                <div>
                    <div className="w-50 mx-auto border p-4 mt-2">
                        <p className="keys">{item.key}</p>
                        <h2>Hello my name is {item.firstname}</h2>
                        <a href={item.link}>My youtube channel</a>
                        <p>{count}</p>
                        <button onClick={onIncrement} className="btn btn-success">Increment</button>
                        <button onClick={onDecrement} className="btn btn-danger">Decrement</button>
                        <button onClick={restart} className="btn btn-warning">Restart</button><br />
                        <button onClick={showModal} className='btn btn-outline-secondary mt-2'>Show modal</button>
                    </div>
                    {istrue && <div onClick={hideModal} className='fixed-top modal_container'>
                        <div className="modal_block">
                            <button className='close-btn' onClick={hideModal}><div className="close">×</div></button>
                            <h1 className='modal-title'>Lorem ipsum amet consectetur.</h1>
                            <p className='modal-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam totam exercitationem veniam, aspernature corporis veritatis ratione ducimus commodi animi, eiusx quod illum impedit facilis vel officia harum reiciendiskey excepturi. Lorem ipsum dolor sit amet consectetur keys adipisicing elit. Earum cum ex ipsum praesentium nem facilis doloribus reprehenderit itaque ullam omnis fugas asperiores nisi eveniet repellat illo id provident. Itaquest enim. Lorem ipsum dolor sit amet, consectetur adipisici elit. Ea a veniam laudantium nisi quia, ex unde autemck excepturi, porro minima odio nostrum alias sequi delect.</p>
                            <button className='hide-modal' onClick={hideModal}>Hide modal</button>
                        </div>
                    </div>}
                </div>
            )
        })
    )
    
}

function App(){
    return (
    <div>
      <User />
    </div>
  )
}

export default App
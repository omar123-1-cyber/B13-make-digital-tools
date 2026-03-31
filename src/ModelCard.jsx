import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Modelcard = ({model,carts,setCarts}) => {
    const[isSubscribe, setIsSubscribe]=useState(false)
    const handleSubscription=()=>{
        setIsSubscribe(true)
        const isFound=carts.find((item)=>item.id===model.id)
        if(isFound){
          toast("item already added")
          return
        }
        setCarts([...carts,model])
        toast("item added")

    }
  return (
     <div className='rounded p-4 shadow-lg '>
                <div className=''>
                  <img className='h-50 w-full object-cover rounded' src={model.image} alt="" />
                </div>
                <div>
                   <h2 className='font-bold'>{model.title}</h2> 
                   <p className='text-gray-500'>{model.description}</p>
                   <h2 className='font-bold text-2xl'>${model.price}/month</h2>
                   <p className='text-blue-500 font-bold '>{model.status}</p>
                </div>
                <button onClick={handleSubscription} className='btn w-full bg-amber-700 mt-5'>{isSubscribe ? "Subscribed" : "Subscribe now"}</button>
                </div>
                
  )
}

export default Modelcard

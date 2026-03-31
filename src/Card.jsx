
import { p } from 'framer-motion/client'
import React from 'react'
import { toast } from 'react-toastify'

const Card = ({carts,setCarts}) => {
    const totalPrice=carts.reduce((sum,item)=>sum+item.price,0)
    const handlePayment=()=>{
      setCarts([])
     toast("procced")
    }

    const handleDelete=(item)=>{
     const filterArray=carts.filter(c=>c.id !== item.id)
     console.log(filterArray)
     setCarts(filterArray)
     toast.warning("deleted item")
    }
   
  return (
    <div>
      <h2 className='text-2xl font-bold text-center'>Your cart</h2>
      {
        carts.length===0 ? <p className='text-center font-bold text-2xl p-10 bg-amber-50 m-2 rounded-2xl text-warning '>card is empty</p>: <p></p>
      }

    {
  carts.map((item) => (
    <div className='flex items-center justify-between mt-3' key={item.id}>
      
      <div>
        <img className='h-40 w-40 'src={item.image} alt="" />
      </div>
      <div>
        <h1 className="font-bold">{item.title}</h1>
      </div>
      <div>
      <div className='font-bold'>${item.price}</div>
      <button onClick={()=>handleDelete(item)} className='btn bg-red-700'>Remove</button>
      </div>
    </div>
  ))
}
<div className='flex justify-between bg-cyan-900 text-white p-5 mt-5 mb-4 rounded-lg text-2xl font-bold'>
    <div>
        Total
    </div>
    <div>{totalPrice}</div>
    
</div>
<button onClick={handlePayment} className='btn w-full mt-2 bg-cyan-500 text-white text-2xl py-5 mb-3 rounded-lg'> Procced to checkout </button>
    </div>
    
  )
}

export default Card

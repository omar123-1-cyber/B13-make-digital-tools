
import React, { use } from 'react'
import Modelcard from './ModelCard'

const Models = ({modelPromise,carts, setCarts}) => {
    const models=use(modelPromise)
    console.log(models)
  return (
    <div className='py-20 bg-gray-300'>

     <div className='text-center p-10 '>
        <h2 className='text-2xl font-bold'>Choose your AI model</h2>
        <p className='text-xl font-semibold text-gray-500'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4'>
           
            {  
               models.map(model=>
             <Modelcard key={model.id} model={model} carts={carts} setCarts={setCarts}/>
                
                
            )
                
            }
       
        </div>
     </div>
   
  )
}

export default Models
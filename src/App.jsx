import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Steps from './Steps.jsx'
import Footer from './Footer.jsx'
import Models from "./Models"
import Card from "./Card"



const getModels=async()=>{
  const res=await fetch("./data.json")
  return res.json()
}
const modelPromise=getModels()

function App() {
  const[activeTab, setActiveTab]=useState("model");
  const [carts, setCarts]=useState([])
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <div className='bg-blue-500 p-10 container mx-auto w-full m-2 text-white '>
       <div className='flex justify-center gap-5'>
         <div className='text-center'>
          <h2 className='font-bold text-3xl' >50k+</h2>
          <p>Active users</p>
        </div>
        <div className='text-center'>
          <h2 className='font-bold text-3xl' >50k+</h2>
          <p>Active users</p>
        </div>
        <div className='text-center'>
          <h2 className='font-bold text-3xl' >50k+</h2>
          <p>Active users</p>
        </div>
       </div>
        
    </div>

    <div className='text-center'>
      <h2 className='font-bold text-3xl mt-5'>Premium Digital Tools</h2>
      <p className='text-gray-400 mb-5'>choose from our curated collection of  digital products design to boost <br /> your productivity and creativity </p>
    </div>

    {/* name of each tab group should be unique */}
{/* name of each tab group should be unique */}
<div className="tabs tabs-box flex justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Model"
  onClick={()=>setActiveTab("model")}
  defaultChecked/>
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`cart (${carts.length})`} 
  onClick={()=>setActiveTab("card")}
  />
</div>
 {activeTab==="model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}
   {activeTab==="card" && <Card carts={carts} setCarts={setCarts}></Card >}
    <Steps></Steps>

    
      <div className='text-center p-10 bg-emerald-200'>
        <h2 className='text-3xl font-bold'>Simple, Transparent Pricing</h2>
        <p className='text-gray-500'>No hidden fees. No surprises. Choose the plan that fits your needs. </p>
     </div>
     <div className='grid grid-cols-3 ml-2 gap-3 '>
      <div className='border border-amber-100 rounded-2xl shadow-2xl mt-5'>
        <h2 className='text-2xl font-bold mt-5'>Starter</h2>
      <p className='text-gray-500'>Perfect for freelancers and solo creators.</p>
      
      <div className='mt-5 flex'>
      <h1 className=' font-extrabold text-3xl'>$9</h1>
      <p className='mt-2 text-gray-400'>/Monthly</p>
      </div>
     <div className='mt-5'>
      <p>3 Tool Licenses
     </p>
      <p className='text-gray-900'>5GB Storage</p>
     <p className='text-gray-900'>Email Support</p>
      <p className='text-gray-900'>Monthly Updates</p>
     </div>
      <button className='btn w-full bg-blue-600 text-white mt-10 mb-3 rounded-2xl'>Get Started</button>
      </div>
      <div className='border border-amber-100 rounded-2xl shadow-2xl mt-5 text-center bg-blue-600 text-white'>
        <h2 className='text-2xl font-bold mt-5'>Starter</h2>
      <p className='text-gray-500'>Perfect for freelancers and solo creators.</p>
      
      <div className='mt-5 flex justify-center'>
      <h1 className=' font-extrabold text-3xl '>$9</h1>
      <p className='mt-2 text-gray-400'>/Monthly</p>
      </div>
     <div className='mt-5 text-gray-600 space-y-1.5 font-semibold'>
      <p>3 Tool Licenses
     </p>
      <p className='text-gray-900'>5GB Storage</p>
     <p className='text-gray-900'>Email Support</p>
      <p className='text-gray-900'>Monthly Updates</p>
     </div>
      <button className='btn w-full bg-white text-blue-500 mt-10 mb-3 rounded-2xl'>Get Started</button>
      </div>
      <div className='border border-amber-100 rounded-2xl shadow-2xl mt-5'>
        <h2 className='text-2xl font-bold mt-5'>Starter</h2>
      <p className='text-gray-500'>Perfect for freelancers and solo creators.</p>
      
      <div className='mt-5 flex'>
      <h1 className=' font-extrabold text-3xl'>$9</h1>
      <p className='mt-2 text-gray-400'>/Monthly</p>
      </div>
     <div className='mt-5'>
      <p>3 Tool Licenses
     </p>
      <p className='text-gray-900'>5GB Storage</p>
     <p className='text-gray-900'>Email Support</p>
      <p className='text-gray-900'>Monthly Updates</p>
     </div>
      <button className='btn w-full bg-blue-600 text-white mt-10 mb-3 rounded-2xl'>Get Started</button>
      </div>
     </div>
    <Footer></Footer>
    </>
  )
}

export default App

import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderSummary from './OrderSummary'
const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>Home</div>
    <button onClick={() => {
return navigate("/order-summary")
    }}>Place your order here :</button>
    </>
  )
}

export default Home
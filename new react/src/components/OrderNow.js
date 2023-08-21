import React from 'react'

const OrderNow = () => {
  return (
    <div className='order'>
      <h1 className='text-center'>Order Now</h1>
      <p className='text-center'>Place your orders in our website</p>
      <img src={require('../assets/two.jpg')} className='img-fluid'/>
    </div>
  )
}

export default OrderNow
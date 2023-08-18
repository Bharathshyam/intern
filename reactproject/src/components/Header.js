import React from 'react'
import image from './download (1).jpg'

const Header = () => {
    return (
        <div className='wrap'>
                <div className='navbar'>
                    <div className='n-h1'>
                        <h1>REACT</h1>
  
                    </div>
  
                    <div className='n-menu'>
                         <a>HOME</a>
                         <a>CONTACT</a>
                        <a>ADDRESS</a>
                        <a>MENU</a>
  
                    </div>
                </div>

                <div className='img'>
                    <img src={image}/>
                    
                    <div className='imgg'>
                    <h1>Hello Friends</h1>
                    <h2>Leatrning REACT</h2>
                    </div>
                </div>
        </div>
      
    )
  }
  
  export default Header
import React from 'react'

const AnimatedList = () => {
  return (
    <div  style={{display:'flex',justifyContent: 'center', alignItems: 'center', border: '0.3px solid #cccccc0'}}> 
          {/* <h2>I am</h2> */}

              <h1 className='heading'>
               
                <div className='animated-wrapper'>
                  <ul className='animated-text'>
                    <li>
                    <span>Diligent</span>
                    </li>
                    <li>
                    <span>Versatile</span>
                    </li>
                    <li>
                    <span>Creative</span>
                    </li>
                  </ul>
                </div>
            </h1>

         </div>
  )
}

export default AnimatedList
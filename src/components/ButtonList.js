import React from 'react'
import Button from './Button'

const list =["All","Gaming","Songs","Market","Cricket","News","Valentines","Live","Football","Marathi","Hindi","English","Maths","Science"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((val,idx)=><Button key={idx} name={val}></Button>
      )}  
        
        
    </div>
  )
}

export default ButtonList
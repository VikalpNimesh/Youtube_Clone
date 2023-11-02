// import React from 'react'
import Button from './Button'

const ButtonList = () => {

    const List = ['All', 'Movies','Music',"Game",'Comedy', 'Movies','Music',"Game",'Other'] 
  return (
    <div className=' flex mb-3  ml-5 m-auto justify-center items-center '>
{List.map((listname,i)=>(<Button key={i} name={listname} />))}

       
    </div>
  )
}

export default ButtonList
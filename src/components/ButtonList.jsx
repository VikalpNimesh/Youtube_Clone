<<<<<<< HEAD
// import React from 'react'
import Button from './Button'

const ButtonList = () => {

    const List = ['All', 'Movies','Music',"Game",'Comedy', 'Movies','Music',"Game",'Other'] 
  return (
    <div className=' overflow-y-auto flex mb-3  m-auto items-center '>
{List.map((listname,i)=>(<Button key={i} name={listname} />))}

       
    </div>
  )
}

=======
// import React from 'react'
import Button from './Button'

const ButtonList = () => {

    const List = ['All', 'Movies','Music',"Game",'Comedy', 'Movies','Music',"Game",'Other'] 
  return (
    <div className=' overflow-y-auto flex mb-3  m-auto items-center '>
{List.map((listname,i)=>(<Button key={i} name={listname} />))}

       
    </div>
  )
}

>>>>>>> a961a138bba5c8247523ddbf9c3b6d1012917cc9
export default ButtonList
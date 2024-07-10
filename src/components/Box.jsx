import React from 'react'
import './box.css'
import { useState } from 'react'


export default function Box() {
  const [details, setdetails] = useState({
    'content': 'The human spirit must prevail over technology',
    'author': '~Albert Einstein'
  })

  console.log(details);

  //  const[details1,setdetails1]=useState('liya')
  //  console.log(details1)

  return (

    <>

      {/* <button className='btn btn-primary' onClick={()=>{setdetails1('riya')}}>click</button> */}

      <div className='box'>{details.content}
        <div className='albert'>{details.author}</div></div>



      {/* {details1} */}
    </>
  )





}

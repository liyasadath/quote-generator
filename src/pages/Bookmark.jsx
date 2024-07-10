import React, { useState } from 'react'
import './bookmark.css'
import Navbar from '../components/Navbar'
import Box from '../components/Box'

export default function Bookmark() {

    const [quotes, setquotes] = useState(JSON.parse(localStorage.getItem('bookmark')))
    console.log(quotes)


    return (
        <div className='main2'>
            <Navbar />
           
            <div className='card'>

                {
                    quotes.map((value,index) => (
                    
                        <div className='box'>{value.content}
                            <div className='albert'>-{value.author }</div>
                        </div>
                      
                      

                    ))
                }






                <br />

                <br />

            </div>
        </div>

    )
}

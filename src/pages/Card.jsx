import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import './card.css'

export default function Card() {
    const [card, setcard] = useState([])
    console.log(card);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            console.log(response.data);
            setcard(response.data)
        })
    }, [])

    return (
        <div>
            <Navbar />


            {
                card.map((value, index) => (
                    <div className='c'>  {value.title}
                        <br /> {value.id}  <br />{value.body}   </div>
                ))
            }



        </div>
    )
}

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Box from '../components/Box'
import Button from '../components/Button'
import axios from 'axios'
import './home.css'

export default function () {

    const [details, setdetails] = useState({})

    const [bookmarks, setBookmarks] = useState( JSON.parse(localStorage.getItem('bookmark')) ||[])

console.log(bookmarks);

  

const nextQoute = () => {
        axios.get('https://api.quotable.io/quotes/random').then((response) => {
            console.log(response.data[0]);
            setdetails(response.data[0])
        })
    }

    useEffect(()=>{
        axios.get('https://api.quotable.io/quotes/random').then((response) => {
            console.log(response.data[0]);
            setdetails(response.data[0])
        })
    },[])
    
        const bookmark =()=>{
            setBookmarks([...bookmarks,details])
            
            
        }


        useEffect(()=>{
            localStorage.setItem("bookmark",JSON.stringify(bookmarks))
        },[bookmarks])
       
    return (
        <div className="main">
            <Navbar />
            <div className='content'>
                <div className='box'> {details.content}
                    {/* <br /><br /><br /><br /> */}
                 
                    <div className='albert'>{details.author}</div></div>
                


                <br /><div className='book' onClick={bookmark}> <svg
  xmlns="http://www.w3.org/2000/svg"
  width={20}
  height={20}
  fill="currentColor"
  className="bi bi-bookmark-plus-fill"
  viewBox="0 0 20 20"
  
>
  <path
    fillRule="evenodd"
    d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"
  />
</svg></div>
                <br />
                <div>
                    <button type="button" className="btngreen" onClick={nextQoute}>
                        Next Qoute
                    </button>

                </div>
            </div>
        </div>

    )
}

//import React from 'react'
import React, {useState} from 'react'

export default function Comment() {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)
  function getData(e){
    setData(e.target.value)
    setPrint(false)
    console.warn(e.target.value)
  }


  return (
    <>
    <p>{data}</p>
    <div className='posts-section' >
      {
        print?
        <h1>{data}</h1>
        :null

      }
    </div>
    <div className='comments' >
        <input className='comment-box' type="text" onChange={getData} placeholder="Enter your comments" ></input>
        <button className='comment-post' onClick={()=> setPrint(true)} >POST</button>
    </div>
    </>
  )
}

import React from 'react'

export default function Comment() {
  return (
    <div className='comments' >
        <input className='comment-box' type="text" placeholder="Enter your comments" ></input>
        <button className='comment-post' >POST</button>
    </div>
  )
}

import React from 'react'

export default function Loading() {
  return (
    <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
      <img src={require("./loading.gif")}  alt=""/>  
      {/* <h1>Extracting Results</h1> */}
    </div>
  )
}

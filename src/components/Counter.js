import React, { useState } from 'react'

const Counter = () => {
    const [state,setState] = useState({count : 0})

    const handleInc = () => {
        setState({
            count : state.count + 1
        })
    } 

    const handleDec = () => {
        setState({
            count : state.count - 1
        })
    } 

  return (
    <div className="container mt-5">
    <h1 className="text-primary">Counter Example !</h1>
    <h3>Counter : {state.count}</h3>
    <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-success" onClick={handleInc}>+</button>
        <button className="btn btn-danger" onClick={handleDec}>-</button>
      </div>
  </div>
  )
}

export default Counter

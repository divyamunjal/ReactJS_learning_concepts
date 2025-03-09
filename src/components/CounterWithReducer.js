import React, { useReducer } from 'react'

const CounterWithReducer = () => {

    function reducer(state,action){
        debugger;
        switch (action.type){
            case 'INCREMENT' : 
            return {count : state.count + 1};
            case 'DECREMENT' : 
            return {count : state.count - 1};
            default :
            return {count : 0}
        }
    }

    const [state,dispatch] = useReducer(reducer,{count : 0})
  return (
    <div className="container mt-5">
    <h1 className="text-primary">Counter Example !</h1>
    <h3>Counter : {state.count}</h3>
    <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-success" onClick={()=> dispatch({type :'INCREMENT'})}>+</button>
        <button className="btn btn-danger" onClick={() => dispatch({type :'DECREMENT'})}>-</button>
        <button className="btn btn-danger" onClick={() => dispatch({type :'RESET'})}>Reset</button>
      </div>
  </div>
  )
}

export default CounterWithReducer

import {useReducer} from 'react'

let reducer = (state, action)=>{
// if or switch 
    switch(action.type){
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        case "reset":
            return {count: state.count = 0};
        default:
            return {count: state.count}
    }
}
function OKReducer() {
    let [state, dispatch] = useReducer(reducer, {count:0});

    let increment = ()=>{
        dispatch({type: "increment"});
    }
    let decrement = ()=>{
        dispatch({type: "decrement"});
    }
    let reset = ()=>{
        dispatch({type: "reset"});
    }

  return (
    <div>
        <h1>
            OKReducer: {state.count}
        </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default OKReducer
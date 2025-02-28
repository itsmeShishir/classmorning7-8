import  {useReducer} from 'react'

let reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
            return state.count + 1;
        case "DECREMENT":
            return state.count - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
}

function OkReducer() {
    let [state, dispatch] = useReducer(reducer, {count:0});
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=> dispatch({type: "INCREMENT"})}>inc</button>
        <button onClick={()=> dispatch({type: "DECREMENT"})}>dec</button>
        <button onClick={()=> dispatch({type: "RESET"}) }>Reset</button>
    </div>
  )
}

export default OkReducer
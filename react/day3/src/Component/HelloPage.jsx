import React, {useState} from 'react'
// useState is a Hook that lets you add React state to function components
// import { useState } from 'react'
// let [State, SetFunctionState] = useState(initialState)
function HelloPage() {
    let [nippon, setNippon] = React.useState(0);
    let [count, SetCount] = React.useState(0);
    let [mode, setMode] = useState(true);

    React.useEffect(()=>{
        console.log(mode);
    }, [mode])
  
    
  return (
    <div>
        <button onClick={()=> setNippon(nippon+1)}>Increment : {nippon}</button>
        <button onClick={()=> SetCount(count-1)}>Decrement: {count}</button>
        {
            mode ?
            <button onClick={()=> setMode(!mode)} >Change Mode : Dark</button> :
            <button onClick={()=> setMode(!mode)} style={{backgroundColor:"white", color:"black"}}>Change Mode : Light mode</button>
        }
    </div>
  )
}

export default HelloPage
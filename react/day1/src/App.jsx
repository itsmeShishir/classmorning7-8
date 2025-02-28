
// function App () {
//   return (
//     <h1>Hello worlds</h1>
//   )
// }
// export default App;

// export let App = () =>{
//     return (
//     <h1>Hello worlds</h1>
//   )
// }

// how to write a css in React or jsx -> object , inline, external
import "./Shishir.css"
// import React from "react";

let App = () =>{
  let name = "Shishir";
  let styless = {
    color: "red", 
  }
  return (
    <>
      <h1 style={{color: "red", fontSize: "150px", backgroundColor: "white" }}>Hello worlds {name}</h1>
      <h1 style={styless}>Hello worlds {name}</h1>
      <h1 style={styless} className="shishir">Hello worlds {name}</h1>
      <h1>Name of the student</h1>
    </>
  )
}


// import React from "react";

// class App extends React.Component{
//   render(){
//    return (
//      <div>
//       <h1 style={{color: "red", fontSize: "150px", backgroundColor: "white" }}>Hello worlds </h1>
//       <h3 >Hello worlds </h3>
//        <h1  className="shishir">Hello worlds </h1>
//        <h1>Name of the student</h1>       
//     </div>
//    )
//   }
// }

export default App

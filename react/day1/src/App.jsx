
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
import CardComponet from "./Card/CardComponet"; 

let App = () =>{
  let name = "Shishir";
  let styless = {
    color: "red", 
  }
  return (
    <div>
      <h1 style={{color: "red", fontSize: "150px", backgroundColor: "white" }}>Hello worlds {name}</h1>
      <h1 style={styless}>Hello worlds {name}</h1>
      <h1 style={styless} className="shishir">Hello worlds {name}</h1>
      <h1>Name of the student</h1>
      {/* <CardComponet />
      <CardComponet> </CardComponet> */}
      <CardComponet names="Nippon"></CardComponet>
    </div>
  )
}

export default App

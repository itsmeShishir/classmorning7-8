import Axioss from "./Component/axios/axios"
// import Fetch from "./Component/fetch/fetch"
import Navbar from "./Component/Navbar"
import {useRef} from 'react';
import OkReducer from "./Component/reducer/okReducrt";
function App() {
  let one = useRef();
  let two = useRef();
  let changecolor = ()=>{
    two.current.style.backgroundColor = "red";
  }
  let gobactotop = ()=>{
    one.current.scrollIntoView({behavior:"smooth"});
  }
  return (
    <>
    <div ref={one}></div>
    <Navbar />
    <OkReducer />
    {/* <Fetch /> */}
    <Axioss />
    <button ref={two} onClick={changecolor}>Chnage Background Color</button>
    <button  onClick={gobactotop}>GO Back to top</button>

    </>
  )
}

export default App
import {useReducer} from 'react'

let img = [
    'https://plus.unsplash.com/premium_photo-1739037172419-98ead2ee574f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    "https://images.unsplash.com/photo-1739323006029-2d8452a47df6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1726056652684-9c135013cef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1739382120673-54ec4d63dc62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
]

let reducer = (state, action)=>{
    switch(action.type){
        case "next":
            return {index: (state.index + 1) % img.length};
        case "prev":
            return {index: (state.index - 1 + img.length) % img.length};
        default:
            return {index: state.index}
    }
}

function SliderReducer() {
    const [state, dispatch] = useReducer(reducer, {index:0})
    let next = ()=>{
        dispatch({type: "next"});
    }
    let prev = ()=>{
        dispatch({type: "prev"});
    }
  return (
    <div>
        <img src={img[state.index]} alt="img" />
        <button onClick={next}>Next</button>
        <button onClick={prev}>Perv</button>
    </div>
  )
}

export default SliderReducer
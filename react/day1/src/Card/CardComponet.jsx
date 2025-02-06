// rfce 
// rfc 


function CardComponet(names) {
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap:"nowrap"}}>
        <div style={{width: "200px" }}>
            <h1>{names}</h1>
        </div>
    </div>
  )
}

export default CardComponet
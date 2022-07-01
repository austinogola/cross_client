


const Item=(props)=>{
    return(
        <div style={{textAlign:'center'}}>
            <div >
                <props.icon style={{color:'#2E4369'}} size={50}/>
            </div>
            <h5>{props.title}</h5>
            <p >{props.brief}</p>
        </div>
    )
}


export default Item
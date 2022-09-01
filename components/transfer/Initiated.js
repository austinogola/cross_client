import { useState,useEffect} from "react"
import { useRouter } from "next/router";

const Initiated=(props)=>{

    const [platforms,setPlatforms]=useState({
        fromPlatform:'Mpesa',
        toPlatform:'Skrill'
    })

    const [Ids,setIds]=useState({
        fromId:'',
        toId:''
    })

    const router = useRouter()
    const trans_id=router.query.pid


    const [fromAmount,setFromAmount]=useState(props.amount)

    const[fees,setFees]=useState({
        taken:'',
        converted:""
    })

    const[exchangeRate,setExchangeRate]=useState(116)

    const handleAmount=(e)=>{
        e.preventDefault()
        let value=parseFloat(e.target.value)
        value=value.toFixed(2)
        

        // }
        // let val=e.nativeEvent.data
        // console.log(e.nativeEvent);
        // if(Number.isInteger(parseInt(val))){
        //     setAmount(amount+val)
        // }
        //

        if(e.target.id=='fromAmount'){
            handleFromAmount(value)
        }
        else{
            handleToAmount(value)
        }
    }

    const handleFromAmount=(value)=>{
        setFromAmount(value)
        const taken=(value*0.05).toFixed(2)
        const converted=(value-taken).toFixed(2)

        setFees({taken:taken,converted:converted})

        const newValue=(value/exchangeRate).toFixed(2)
        const showInput=document.querySelector("#toAmount")
        showInput.value=newValue
        
        const warning=document.querySelector('.warning')
        if(parseFloat(showInput.value)<5.0){
            // warning.style.display='block'
            showInput.style.borderBottom='2px solid red'
        }else{
            // warning.style.display='none'
            showInput.style.borderBottom='2px solid #808080'
        }

    }
    
    const handleToAmount=(value)=>{
        const newValue=(value*exchangeRate).toFixed(2)
        const showInput=document.querySelector("#fromAmount")
        showInput.value=newValue
        setFromAmount(newValue)
    }

    const handleFromPlatform=(e)=>{
        e.preventDefault()
        setPlatforms({...platforms,fromPlatform:e.target.value})
        console.log(platforms);
    }

    const handleToPlatform=(e)=>{
        e.preventDefault()
        setPlatforms({...platforms,toPlatform:e.target.value})
        console.log(platforms);
    }

    const handleIds=(e)=>{
        e.preventDefault()
        setIds({...Ids,[e.target.name]:e.target.value})
    }

    const showers=()=>{

    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(fromAmount);
        console.log(platforms);
        console.log(Ids)
        fetch('http://localhost:4000/transaction/pending',{
          method:'POST',
          headers:{jwtToken:localStorage.token,'Content-Type':"application/json"},
          body:JSON.stringify({
            fromPlatform:platforms.fromPlatform,
            toPlatform:platforms.toPlatform,
            fromAmount:fromAmount,
            fromid:Ids.fromId,
            toid:Ids.toId,
            trans_id:trans_id
          })
        }).then(async response=>{
            const resp=await response.json()
            console.log(resp);
            router.push(`/transfer/${resp.trans_id}`)
        })
    }

    const setSelected=(e)=>{
        e.preventDefault()
        console.log('Load works fine');
    }

    useEffect(()=>{
        const selects=document.querySelectorAll("select")

    })
    
    return(
        <div className="Initiated">
            <h4>Transfer Initiated &#10003;</h4>
            <h6>Please Confirm All Details Below</h6>
            <div className="boxWrapper">
                <div className="box border">
                    <div className="one"></div>
                    <div className="details">
                        <div className="platforms">
                            <p>Platforms</p>
                            <div>
                                <div>
                                    <select onChange={handleFromPlatform} id="fromPlatform"  >
                                        <option value="M-Pesa">M-pesa</option>
                                        <option value="Airtel">Airtel</option>
                                        <option value="Paypal">Paypal</option>
                                    </select>
                                </div>
                                <div className="arrow">&#8658;</div>
                                <div>
                                    <select onChange={handleToPlatform} name="toPlatform" id="toPlatform">
                                        <option value="Skrill">Skrill</option>
                                        <option value="Neteller">Neteller</option>
                                        <option value="Paypal">Paypal</option>
                                        <option value="P.Money">P.Money</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="IdsWrapper">
                            <div><h6>Details</h6></div>
                            <div className="Ids">
                                <div>
                                    <h6>Mpesa number</h6>
                                    <input onChange={handleIds} type="number" name='fromId'/>
                                </div>
                                <div>
                                    <h6>Skrill email</h6>
                                    <input onChange={handleIds} type="text" name='toId'/>
                                </div>
                            </div>
                        </div>
                        <div className="amountWrapper">
                            <div>
                                <h6>Amount</h6>
                            </div>
                            <div className="amount">
                                <div><input type="number"  onChange={handleAmount} id='fromAmount'/></div>
                                <div><input type="number"  onChange={handleAmount} id='toAmount'/></div>
                            </div>
                        </div>
                        <div>Four</div>
                    </div>
                    <div className="three" onClick={handleSubmit}>
                        <button>Continue</button>
                    </div>
                </div>
                {/* <button onClick={showers}>Show</button> */}
            </div>

            <style jsx>{`
                    .Initiated{
                        padding-top:10px;
                        text-align:center;
                        
                    }
                    .boxWrapper{
                        display:flex;
                        justify-content:center;
                    }
                    .box{
                        height:520px;
                        width:35%;
                        display:grid;
                        grid-template-rows:3fr 18fr 4fr;
                    }
                    .one{
                        background-color:#3498DB;
                    }
                    .details{
                        display:grid;
                        grid-template-rows:1fr 1fr 1fr 1fr;
                    }
                    .details>div{
                        border-bottom:black solid 1px;
                        padding-bottom:3px;
                    }
                    .platforms>div{
                        display:grid;
                        grid-template-columns:40% 20% 40%;
                    }
                    .three{
                        background-color:#2ECC71;
                    }
                    .three>button{
                        background-color:#2ECC71;
                        color:white;
                        height:100%;
                        width:100%;
                    }
                    .three>button:hover{
                        background-color:#25A25A;
                    }
                    .arrow,.arrow *{
                        font-size:20px;
                    }
                    select{
                        cursor:pointer;
                    }
                    .amount{
                        display:grid;
                        grid-template-columns:50% 50%;
                    }
                    .Ids{
                        display:grid;
                        grid-template-columns:50% 50%;
                    }


                    @media only screen and (max-width:800px){
                        .box{
                            width:50%;
                        }
                    }

                    @media only screen and (max-width:640px){
                        .box{
                            width:65%;
                        }
                    }
                `}</style>
        </div>
    )
}


export default Initiated
import Select from "./select"
import { useState ,useEffect} from "react"
import { useRouter } from "next/router"


const Cross=()=>{

    const [fromAmount,setFromAmount]=useState(0.0)
    const [platforms,setPlatforms]=useState({
        fromPlatform:'M-Pesa',
        toPlatform:'Skrill'
    })

    const router=useRouter()

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

    const handlePlatform=(e)=>{
        e.preventDefault()
        setPlatforms({...platforms,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        console.log('This really works');
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(fromAmount);
        console.log(platforms);
        fetch('http://localhost:4000/transaction/initiate',{
          method:'POST',
          headers:{jwtToken:localStorage.token,'Content-Type':"application/json"},
          body:JSON.stringify({
            fromPlatform:platforms.fromPlatform,
            toPlatform:platforms.toPlatform,
            fromAmount:fromAmount
          })
        }).then(async response=>{
            const resp=await response.json()
            console.log(resp);
            router.push(`/transfer/${resp.trans_id}`)
        })
    }


    return(
        <div className="Cross">
            <div className="crossWrapper">
                <h4>Cross Transfers</h4>
                <div className="finalWrapper">
                    <div className="source">
                        <div className="amount">
                            <p>Amount you send</p>
                            <input type="number"  onChange={handleAmount} id='fromAmount'/>
                        </div>
                        <div className="platform">
                            <div className="selection">
                                <select name="fromPlatform" id="" onChange={handlePlatform}>
                                    <option value="M-Pesa">M-Pesa</option>
                                    <option value="Airtel">Airtel</option>
                                    <option value="Paypal">Paypal</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="dest">
                        <div className="amount">
                            <p>Amount you receive</p>
                            <input type="number"  onChange={handleAmount} id='toAmount'/>
                        </div>
                        <div className="platform">
                            <div className="selection">
                                <select name="toPlatform" id="" onChange={handlePlatform}>
                                    <option value="Skrill">Skrill</option>
                                    <option value="Nuteller">Nutella</option>
                                    <option value="Paypal">Paypal</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="fees">
                        <h6>Fees</h6>
                    </div>
                    <div className="continue">
                        <button onClick={handleSubmit}>Continue</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                    .Cross{
                        display:flex;
                        justify-content:center;
                    }
                    .crossWrapper{
                        border:3px solid #E0E0E0;
                        height:450px;
                        width:70%;
                        padding:15px 20px 0px 20px;
                    }
                    .crossWrapper>h4{
                        text-align:center;
                        margin-bottom:20px;
                        font-weight:400;
                    }

                    .finalWrapper{
                        height:380px;
                        display:grid;
                        grid-template-rows:25% 25% 35% 15%;
                    
                    }
                    .finalWrapper>div{
                        border-bottom:1px solid #E0E0E0;
                        border-top:1px solid #E0E0E0;
                        
                    }
                    .source,.dest{
                        display:grid;
                        grid-template-columns:65% 35%;
                        padding:10px;
                    }
                    .amount p{
                        font-size:12px;
                    }
                    input{
                        font-weight:bold;
                        border:none; 
                        outline:none;
                        font-size:24px;
                        position:relative;
                        width:80%;
                        bottom:10px;
                    }
                    .platform{
                        border-left:2px solid #E0E0E0;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .continue{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .continue>button{
                        width:90%;
                        height:80%;
                        background:#FFDE2F;
                        border:none;
                        border-radius:3px;
                        transition:.3s;
                        color:black;
                        font-size:18px;
                    }
                    .continue>button:hover{
                        background-color:#FFD800;
                    }
                    .selection{
                        display:flex;
                        align-items:center;
                    }

                    select{
                        width:95%;
                        font-size:15px;
                        font-weight:700;
                        border:none;
                        cursor:pointer;
                    }

                    @media only screen and (max-width:720px){
                        .crossWrapper{
                            width:80%;
                        }
                    }
                    @media only screen and (max-width:480px){
                        .crossWrapper{
                            width:90%;
                        }
                    }

                `}</style>
        </div>
    )
}


export default Cross
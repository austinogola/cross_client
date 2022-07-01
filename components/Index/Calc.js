import { useState } from "react"
import { useRouter } from "next/router"


const Calc=()=>{
    const [amount,setAmount]=useState(0.0)
    const [currency,setCurrency]=useState({
        from:'KES',
        to:'USD'
    })
    const[fees,setFees]=useState({
        taken:'',
        converted:""
    })

    const router=useRouter()

    const[exchangeRate,setExchangeRate]=useState(116)

    const handleAmount=(e)=>{
        e.preventDefault()
        let value=parseFloat(e.target.value)
        value=value.toFixed(2)
        setAmount(value)
        

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
        const taken=(value*0.05).toFixed(2)
        const converted=(value-taken).toFixed(2)

        setFees({taken:taken,converted:converted})

        const newValue=(value/exchangeRate).toFixed(2)
        const showInput=document.querySelector("#toAmount")
        showInput.value=newValue
        
        const warning=document.querySelector('.warning')
        if(parseFloat(showInput.value)<5.0){
            warning.style.display='block'
            showInput.style.borderBottom='2px solid red'
        }else{
            warning.style.display='none'
            showInput.style.borderBottom='2px solid #808080'
        }

    }

    const handleToAmount=(value)=>{
        const newValue=(value*exchangeRate).toFixed(2)
        const showInput=document.querySelector("#fromAmount")
        showInput.value=newValue
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        localStorage.setItem('wishedAmount',amount)
        router.push('/register')
    }

    return(
        <div className="Calc">
            <div className="subCalc">
                <div className="calcOrigin">
                    <div>
                        <div className="amount">
                            <div><label htmlFor="toAmount">Send:</label><br /></div>
                            <div><input type="number" name='fromAmount' id='fromAmount' onChange={handleAmount}/><br /></div>
                        </div>
                        <div className="platform">
                            <select name="" id="">
                                <option value="Mpesa">Mpesa</option>
                                <option value="Skrill">Skrill</option>
                                <option value="Paypal">Paypal</option>
                                <option value="Perfect Money">Perfect Money</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="fees"></div>
                <div className="calcDest">
                    <div>
                        <div className="amount">
                            <div><label htmlFor="toAmount">Receive:</label><br /></div>
                            <div><input type="number" name='toAmount' id='toAmount' onChange={handleAmount}/><br /></div>
                            <div className="warning"><small>Smallest amount is 5.0 usd</small></div>
                        </div>
                        <div className="platform">
                            <select name="" id="">
                                <option value="Mpesa">Mpesa</option>
                                <option value="Skrill">Skrill</option>
                                <option value="Nuteller">Nuteller</option>
                                <option value="Perfect Money">Perfect Money</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="calcBtns">
                    <div>
                        <div className="started">
                            <button><a href="/register">Get Started</a></button>
                        </div>
                        <div className="learn">
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .Calc{
                    background-color:white;
                    padding:20px;
                    border-radius:5px;
                }
                {/* .subCalc{
                    display:grid:
                    grid-template-columns:repeat(4,25%);
                } */}
                .calcOrigin,.calcDest{
                    border:#C1C1C1 2px solid;
                    border-radius:3px;
                    height:5em;
                }
                .fees{
                    height:6.5em;
                    padding:10px;
                }
                 .calcOrigin>div,.calcDest>div{
                    display:grid;
                    grid-template-columns:65% 35%;
                    height:100%;
                }
                .amount{
                    background-color:white;
                    height:100%;
                    display:grid;
                    grid-template-rows:25% 45% 30%;
                    padding-left:10px;
                }
                .platform{
                    background-color:#2E4369;
                    display:flex;
                    justify-content:center;
                    align-items:center;

                }
                .platform>select{
                    background-color:#2E4369;
                    color:white;
                    cursor:pointer;
                    width:80%;
                    border:none;
                }
                input{
                    border:none;
                    outline:none;
                    border-bottom:#808080 solid 2px;
                    width:80%;
                    height:100%;
                }
                input:focus{
                    border: none;
                    outline: none;
                    border-bottom: 2px solid #2EAD4B;
                }
                .calcBtns{
                    margin-top:20px;
                }

                .calcBtns>div{
                    display:grid;
                    grid-template-columns:50% 50%;
                }
                
                
                .learn,.started{
                    display:flex;
                    justify-content:center; 
                }
                button{
                    transition: .5s;
                }
                .learn>button,.started>button{
                    width:80%;
                    outline:none;
                    border:none;
                    height:100%;
                    min-height:40px;
                    border-radius:3px;
                }
                .learn>button{
                    border:#00A2DD 1px solid;
                    background:white;
                }
                .started>button{
                    background:#2EAD4B;
                    color:white;
                }

                .started>button:hover{
                    background:#248A3C;
                    color:white;
                }

                .learn>button:hover{
                    background:#00A2DD;
                    color:white;
                }

                .started>button>a{
                    text-decoration:none;
                    color:white;
                }
                label{
                    font-size:14px;
                }
                small{
                    font-size:12px;
                }
                .warning{
                    display:none;
                    color:#CF2929;
                }
            `}</style>
        </div>
    )
}


export default Calc
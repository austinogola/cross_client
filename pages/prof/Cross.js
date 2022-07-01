import { useState } from "react"

const Cross=()=>{

    const [fees,setFees]=useState({
        taken:'-',
        converted:'-',
        rate:116
    })

    const exchangeRate=116

    const handleChange = (event) => {
        event.preventDefault()
        const value=parseFloat(event.target.value)

        value=value.toFixed(2)


        if(event.target.name=='fromAmount'){
            handleFromAmount(value)
        }
        else{
            handleToAmount(value)
        }


    }

    const handleFromAmount=(value)=>{
        const taken=(value*0.05).toFixed(2)
        const converted=(value-taken).toFixed(2)

        setFees({...fees,taken:taken,converted:converted})


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

    return(
        <div className="Cross">
            <div className="crossWrapper">
                {/* <div className="progress">Progress bar</div> */}
                <div className="calculator">
                    <div className="calculatorWrapper">
                        <div className="origin">
                            <div className="amount">
                                {/* <div><label htmlFor="toAmount">You send:</label></div>
                                <div className=""><input type="number" name='toAmount' id='toAmount'/></div> */}
                                <div className="form-group">
                                    <label htmlFor="fromAmount">Amount you send:</label><br />
                                    <input onChange={handleChange} type="number" className="" name='fromAmount' id='fromAmount'/>
                                </div>
                            </div>
                            <div className="platform ">
                                <select name="" id="">
                                    <option value="Mpesa">Mpesa</option>
                                    <option value="Mpesa">Airtel Money</option>
                                    <option value="Mpesa">Paypal</option>
                                </select>
                            </div>
                        </div><br />
                        <div className="fees">
                            <div className="feeNames">
                                <h6>Fee taken</h6>
                                <h6>Amount converted</h6>
                                <h6>Conversion rate</h6>
                            </div>
                            <div className="feeAmounts">
                                {fees.taken} <br />
                                {fees.converted} <br />
                                {fees.rate}
                            </div>
                        </div>
                        <div className="dest ">
                            <div className="amount">
                                <div className="form-group">
                                    <label htmlFor="toAmount">Amount you'll receive:</label><br />
                                    <input onChange={handleChange} type="number" className="" name='toAmount' id="toAmount"/><br />
                                    <small className="warning">Smallest value to receive is 5.0 USD</small>
                                </div> 
                            </div>
                            <div className="platform ">
                                <select name="" id="">
                                        <option value="Mpesa">Skrill</option>
                                        <option value="Mpesa">Nuteller</option>
                                        <option value="Mpesa">Perfect Money</option>
                                </select>
                            </div>
                        </div>
                        <div className="proceed">
                            <button>Proceed</button>
                        </div>
                    </div>
                </div>
            </div>


            <style jsx>
                {`
                    .Cross{
                        background-color:#F3F6F8;
                        display:flex;
                        justify-content:center;
                    }
                    .crossWrapper{
                        width:80%;
                        background-color:white;
                        padding:15px;
                    }
                    .origin,.dest{
                        display:grid;
                        grid-template-columns:70% 30%;
                        height:90px;
                        border:1px solid #37517E;
                        border-radius:3px;
                    }
                    .amount{
                        height:90px;
                        display:grid;
                        grid-template-rows:30% 50% 20%;
                        padding:10px;
                        padding-top:5px;
                    }
                    .input{
                        height:100%;
                    }
                    .platform{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        background-color:#37517E;
                    }
                    .fees{
                        display:grid;
                        grid-template-columns:50% 50%;
                        padding:10px;
                        color:#37517E;
                        font-size:12px;
                        
                    }
                    .fees *{
                        font-size:12px;
                    }
                    label{
                        font-size:11px;
                    }
                    small{
                        font-size:12px;
                    }

                    input{
                    border:none;
                    outline:none;
                    border-bottom:#808080 solid 1px;
                    height:35px;
                    width:85%;
                    }
                    input:focus{
                        border: none;
                        outline: none;
                        border-bottom: 2px solid #2EAD4B;
                    }

                    .proceed{
                        margin-top:20px;
                    }
                    .proceed>button{
                        width:100%;
                        background-color:#2EAD4B;
                        border:none;
                        border-radius:3px;
                        height:40px;
                        color:white;
                        transition:.3s;
                    }
                    .proceed>button:hover{
                        background-color:#248A3C;
                    }
                    select{
                        width:60%;
                        font-size:12px;
                    }
                    .warning{
                        display:none;
                        color:red;
                    }

                    @media (max-width:720px){
                        .crossWrapper{
                            width:100%;
                            background-color:white;
                            padding:5px;
                    }
                    }
                `}
            </style>
        </div>
    )
}



export default Cross
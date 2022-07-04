import Calc from "./Calc"

const First=()=>{
    return(
        <div className="First">
            <div className="firstWrapper">
                <div className="firstContent">
                    <div className="firstText">
                        <div><h3>A simple way to</h3></div>
                        <div><h1 class="">Transfer Funds</h1></div>
                        <div><h2>Across all Digital Wallets</h2></div>
                    </div>
                    <div className="signUp">
                        <button><a href="/register">Create FREE account</a></button>
                    </div>
                </div>
                <div className="calcWrapper">
                    <Calc/>
                </div>
            </div>

            <style jsx>
                {`
                    .First{
                        background-color:#37517E;
                        width:100%;
                        display:flex;
                        justify-content:center;
                        min-height:500px;
                    }
                    .First>div{
                        min-height:300px;
                        padding-top:50px;
                    }
                    .firstContent{
                        padding:20px;
                        display:grid;
                        grid-template-rows:70% 30%;

                    }
                    .firstText{
                        color:white;
                        letter-spacing: 2px;
                        line-height: 1.2;
                        font-weight:bold;
                    }
                    .firstText>div{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    
                    .firstText h1{
                        font-weight:bolder;
                        font-size:60px;
                    }

                    .firstWrapper{
                        width:90%;
                        display:grid;
                        grid-template-columns:60% 40%;

                    }
                    .calcWrapper{
                        padding:10px;
                    }
                    .signUp{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .signUp>button{
                        background-color:#2EAD4B;
                        width:40%;
                        height:50px;
                        border:none;
                        outline:none;
                        border-radius:999px;
                        color:white;
                        font-size:16px;
                        transition:.3s;
                    }
                    .signUp>button a{
                        color:white;
                        font-size:16px;
                        text-decoration:none;
                    }
                    .signUp>button:hover{
                        background:#299B43;
                    }

                    @media (max-width:900px){
                        .firstWrapper{
                            display:block;
                        }
                        .firstContent{
                            margin-bottom:50px;
                        }
                        .firstText{
                            margin-bottom:50px;
                        }
                        .signUp>button{
                            width:50%;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default First
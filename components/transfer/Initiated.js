

const Initiated=()=>{
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
                                <div>First</div>
                                <div>Mid</div>
                                <div>Last</div>
                            </div>
                        </div>
                        <div>Two</div>
                        <div>Three</div>
                        <div>Four</div>
                    </div>
                    <div className="three"></div>
                </div>
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
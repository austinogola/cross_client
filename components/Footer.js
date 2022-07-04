

const Footer=()=>{
    return(
        <div className="Footer">
            <div className="footerWrapper container">
                <div className="">
                    <h3 style={{textAlign:'center',color:'white'}}>LogoHere</h3>
                    <div className="d-flex">
                        <div className="footerNav">
                            <div>Home</div>
                            <div>About</div>
                            <div>How To</div>
                            <div>Contact Us</div>
                        </div>
                    </div>
                </div>
                <div className=" row mt-3">
                   <div className=" col-4">SUPPORTED CARDS AND NETWORKS:</div>
                   <div className=" col-1"><img src="/images/mpesa1.png" alt="" /></div>
                   <div className=" col-1"><img src="/images/airtel1.png" alt="" /></div>
                   <div className=" col-1"><img src="/images/airtel1.png" alt="" /></div>
                   <div className=" col-1"><img src="/images/airtel1.png" alt="" /></div>
                   <div className=" col-1"><img src="/images/airtel1.png" alt="" /></div>
                   <div className=" col-1"><img src="/images/airtel1.png" alt="" /></div>
                </div>
            </div>
            <div className=" mt-5 last">
                <h6>Copyright &copy; CrossCash Services.All rights reserved</h6>
            </div>
            
            {/* <div className="bottom container">
                <p>Copyright 2022 Crosscash</p>
            </div> */}
            <style jsx>{`
                .Footer{
                    background-color:#394E79;
                    min-height:200px;
                    padding-top:30px;
                }
                .bottom{
                    background-color:#253655;
                }
                .footerWrapper>div>div{
                    display:flex;
                    justify-content:center;
                }
                .footerNav{
                    width:70%;
                    display:flex;
                    justify-content:center;
                }
                .footerNav>div{
                    margin:15px;
                }
                img{
                    max-width:90%;
                }
                .last{
                    background-color:#2EAD4B;
                    text-align:center;
                    color:white;
                    height:30px;
                }
                `}
            </style>
        </div>
    )
}


export default Footer


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
                            <div>Blog</div>
                            <div>Contact Us</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom container">
                <p>Copyright 2022 Crosscash</p>
            </div>
            <style jsx>{`
                .Footer{
                    background-color:#394E79;
                    min-height:300px;
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
                    justify-content:space-between;
                }
                `}
            </style>
        </div>
    )
}


export default Footer
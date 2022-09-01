import Logo from "./Logo"

const Footer=()=>{
    return(
        <div className="Footer">
            <div className="footerWrapper container">
                    <div className="logo">
                        <Logo/>
                    </div>
                    
                    <div className="footerNav">
                        <div>
                            <div className="navItems hom"><a href="/">Home</a></div>
                            <div className="navItems abt"><a href="/about">About</a> </div>
                            <div className="navItems how"><a href="/how">How To</a> </div>
                            <div className="navItems con"><a href="/contact">Contact Us</a> </div>
                        </div>
                    </div>
                <div className=" row mt-3">
                   {/* <div className=" col-4">SUPPORTED CARDS AND NETWORKS:</div>
                   <div className=" col-1"><img src="/images/mpesa1.png" alt="" /></div>
                   <div className=" col-1"><img src="/images/airtel1.png" alt="" /></div>
                   <div className=" col-1"><img src="/images/airtel1.png" alt="" /></div>
                   <div className=" col-1"><img src="/images/airtel1.png" alt="" /></div>
                   <div className=" col-1"><img src="/images/airtel1.png" alt="" /></div>
                   <div className=" col-1"><img src="/images/airtel1.png" alt="" /></div> */}
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
                
                .footerNav{
                    
                    display:flex;
                    justify-content:center;
                    
                }
                .footerNav>div{
                    display:flex;
                    justify-content:justify-content:space-between;;
                    
                }
                .navItems{
                    padding:10px;
                    cursor:pointer;
                }
                .navItems>a{
                    color:#282529;
                    text-decoration:none;
                }
                .hom{
                    border-right:2px solid black;
                    padding-right:5px;
                }
                .abt{
                  border-right:2px solid black;  
                }
                .how{
                    border-right:2px solid black; 
                }
                .logo{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    margin-bottom:30px;
                }
                .footerNav>div{
                    margin:15px;
                }
                img{
                    max-width:90%;
                }
                .last{
                    background-color:#2EAD4B;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    color:white;
                    height:30px;
                }
                `}
            </style>
        </div>
    )
}


export default Footer
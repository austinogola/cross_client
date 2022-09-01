


const Home=()=>{
    return(
        <div classname='Home'>
            <div className="title"><p>Home</p></div>
            <div className="homeWrapper">
                <div className="floating shadow">
                    <div className="">

                    </div>
                    <div className="words">
                        <h5>Instantaneous transfers with CrossPesa</h5>
                        <p>Transfer to any digital wallet across the world.</p>
                        <ol className="steps">
                            <li>Go to Transfers</li>
                            <li>Choose wallets i.e Mpesa to Skrill</li>
                            <li>Start transfer</li>
                        </ol>
                        <div className="feats">
                            <div>Instant</div>
                            <div>Fee 5%</div>
                            <div>24h Support</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="recents">
                <p>Recent activity</p>
                <div className="actualRecents">
                    <div className="wrapper">
                        <div className="act">
                            <div className="trans-icon"></div>
                            <div className="trans-details">
                                <div className="values">
                                    One
                                </div>
                                <div className="time">
                                    Two
                                </div>
                                {/* <div className=""></div>
                                <h6>Transfer from MPESA to SKRILL</h6>
                                <h4>3456</h4>
                                <div className="time">
                                    <p>April 1, 2022 12:38 PM</p>
                                </div> */}
                            </div>
                        </div>
                        <div className="act">Two</div>
                        <div className="act">Thre</div>
                        <div className="act">Four</div>
                    </div>
                    
                </div>
            </div>


            <style jsx>{`
                    .Home{
                        
                    }
                    .title{
                        text-align:center;
                        font-size:24px;
                    }
                    .homeWrapper{
                        
                        display:flex;
                        justify-content:center;
                        margin-bottom:40px;
                    }
                    .floating{
                        /* offset-x | offset-y | blur-radius | spread-radius | color */
                        box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2); 
                        height:200px;
                        border-radius:10px;
                        width:80%;
                        box-shadow: 0 0 5px 2px #fff;
                        -webkit-box-shadow: 0 0 5px 2px #fff;
                        -moz-box-shadow: 0 0 5px 2px #fff;
                        display:grid;
                        grid-template-columns:3fr 12fr;
                        grid-gap:20px;
                        padding:20px;
                        
                    }
                    .words{

                    }
                    
                    .words>p{
                        font-size:14px;
                    }
                    .steps{
                        font-size:13px;
                    }
                    .feats{
                        display:flex;

                    }
                    .feats>div{
                        font-size:10px;
                        margin:12px;
                        background-color:#29CFD4;
                        padding-left:5px;
                        padding-right:5px;
                        border-radius:99px;
                    }
                    .recents{
                        text-align:center;
                    }
                    .actualRecents{
                        display:flex;
                        justify-content:center;

                    }
                    .wrapper{
                        width:50%;
                    }
                    .act{
                        height:60px;
                        border-top:#D6D6D6 1px solid;
                        cursor:pointer;
                        display:grid;
                        grid-template-columns:20% 80%;
                        text-align:left;
                    }
                    
                    .act:hover{
                        background-color:#E0E0E0;
                        transition:.3s;
                    }
                    .details{
                       
                    }
                `}</style>
        </div>
    )
}


export default Home
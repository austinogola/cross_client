import mpesa from '../images/mpesa1.png'

const Third=()=>{
    return(
        <div className="Third border p-5">
            <div className="thirdWrapper container">
                <h3>CrossCash - Digital Currency Exchange Platform</h3>
                {/* <p>
                    CrossCash is a financial service that offers the most honest and competitive crypto 
                    and fiat transfer services ever. The service allows you to quickly, safely and easily 
                    buy / sell digital currency anywhere in the world. We believe that the future of money
                     is one in which we humans control our economy. A future with no place for middlemen 
                     and hidden fees. We offer excellent exchange rates and transparent fees.
                </p> */}
                <div>
                    <h4>Supported Platforms</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 border">
                                <img className='mpesa' src='/images/mpesa3.png' alt="mpesa" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 border">
                                <img className='air' src='/images/airtel1.png' alt="" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 border">
                                <img className='skr' src='/images/skrill1.png' alt="" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 border">
                                <img className='pm' src='/images/perfect-money1.png' alt="" />
                            </div>
                            <div className="col-3 d-md-none">
                                
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 border">
                                <img className='ppal' src='/images/paypal1.png' alt="" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 border">
                                <img className='net' src='/images/neteller1.png' alt="" />
                            </div>
                        </div>
                        <div className="row nd">
                            
                            <div className="col-3 d-md-none">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .Third{
                    background-color:white;
                    width:100%;
                    }
                    .thirdWrapper{
                        text-align:center;
                    }
                    img{
                        
                    }
                    .col-3{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }
                    .col-12{
                        height:200px;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }

                    .nd>div{
                        padding-top:20px;
                    }
                    .pm,.mpesa{
                        max-width:90%;
                    }
                    .ppal,.net{
                        max-width:90%; 
                    }
                `}
            </style>
        </div>
    )
}

export default Third
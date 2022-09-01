import Review from "./Review"

const Fourth=()=>{
    return(
        <div className="Fourth border">
            <div className="fourthWrapper container border">
                <h4 className="title">TESTIMONIALS</h4>
                <h6>You are in great company.Heres what our customers say about us</h6>

                <div className="row">
                    <Review name='Pius Okwri' date='04.07.2022' time='13:16'
                        review='Great service.Was doubtful at first but I am glad I went with them'
                     />

                    <Review name='Jeff Kimutai' date='03.08.2022' time='13:16'
                        review="Instant payments.Plus they're cheaper than Eastpesa for skrill deposits.Thanks for everything"
                     />

                     
                </div>

                <div className="buttons">
                    <a href="/reviews">More reviews</a>
                    <a href="/reviews">Post review</a>
                </div>

            </div>

            <style jsx>{`
                .Fourth{
                    background-color:white;
                    height:600px;
                    display:flex;
                    align-items:center;
                    padding-left:20px;
                    padding-right:20px;
                }
                .fourthWrapper{
                    height:300px;
                    background-color:white;
                    color:#46627E;
                }
                h4,h6{
                    text-align:center;
                }
                h6{
                    font-size:12px;
                }
                .buttons{
                    display:flex;
                    justify-content:center;

                }
                .buttons>a{
                    margin:10px
                }
            `}</style>
        </div>
    )
}



export default Fourth
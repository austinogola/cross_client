import Review from "./Review"

const Fourth=()=>{
    return(
        <div className="Fourth border">
            <div className="fourthWrapper container">
                <h4 className="title">TESTIMONIALS</h4>
                <h6>You are in great company.Heres what our customers say about us</h6>

                <div className="border row">
                    <Review name='Pius Okwri' date='04.07.2022' time='13:16'
                        review='The service allows you to quickly, safely and easily buy / sell digital currency anywhere in the world.
                        The service allows you to quickly, safely and easily buy / sell digital currency anywhere in the world'
                     />

                    <Review name='Jeff Kimutai' date='04.07.2022' time='13:16'
                        review='The service allows you to quickly, safely and easily buy / sell digital currency anywhere in the world.
                        The service allows you to quickly, safely and easily buy / sell digital currency anywhere in the world'
                     />

                    <Review name='Menil Otil' date='04.07.2022' time='13:16'
                        review='The service allows you to quickly, safely and easily buy / sell digital currency anywhere in the world.
                        The service allows you to quickly, safely and easily buy / sell digital currency anywhere in the world'
                     />
                     
                </div>

                <div className="buttons">
                    <button><a href="/reviews">More reviews</a></button>
                    <button><a href="/reviews">Post review</a></button>
                </div>

            </div>

            <style jsx>{`
                .Fourth{
                    background-color:white;
                }
                .fourthWrapper{
                    height:400px;
                    background-color:white;
                }
                h4,h6{
                    text-align:center;
                }
                .buttons{
                    display:flex;
                    justify-content:center;

                }
                .buttons>button{
                    margin:5px
                }
            `}</style>
        </div>
    )
}



export default Fourth
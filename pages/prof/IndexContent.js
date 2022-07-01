import { AiOutlineWarning } from "react-icons/ai";

const IndexContent=()=>{
    return(
        <div className="IndexContent">
            <div className="card1">
                <div><h6>Your Profile</h6></div>
                <div>Blah</div>
            </div>
            <div className="verification">
                <h6>Verification</h6>
                <div>
                    <AiOutlineWarning size={30}/>
                </div>
            </div>
            <div className="recents">
                <div><h6>Recent Activities</h6></div>
                <div>Blah</div>
            </div>
            <style jsx>
                {`
                    .IndexContent{

                    }
                    .card1,.recents{
                        display:grid;
                        grid-template-rows:25% 75%;
                        height:130px;
                        background:white;
                        border-radius:5px;
                        padding:10px;
                        margin-bottom:50px;
                    }
                    .card1>div:first-child{
                        border-bottom:1px solid green;
                    }
                    .card1>div:nth-child(2n){
                        padding-top:5px;
                    }
                    .recents>div:first-child{
                        border-bottom:1px solid green;
                    }
                    .recents>div:nth-child(2n){
                        padding-top:5px;
                    }

                    .verification{
                        background-color:#FFF599;
                        height:100px;
                        margin-bottom:50px;
                        padding:10px;

                    }
                `}
            </style>
        </div>
    )
}


export default IndexContent
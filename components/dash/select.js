import { FaCaretDown } from "react-icons/fa";
import img1 from './download.png'

const select=()=>{
    return(
        <div className="parent">
            <div className="selected">
                <p>M-Pesa</p>

            </div>
            <div className="choices">
                <div>Airtel Money</div>
                <div></div>
                <div>Choice 3</div>
            </div>
            <style jsx>{`
                    .selected{
                        display:flex;
                        border:1px solid red;
                    }
                    .selected>p{
                        font-size:16px;
                        font-weight:500;

                    }

                `}</style>
        </div>
    )
}


export default select
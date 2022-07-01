import Item from "./Item"
import {BiBadgeCheck} from 'react-icons/bi'
import {BiTimer} from 'react-icons/bi'
import {BiWallet} from 'react-icons/bi'
import {BiTimeFive} from 'react-icons/bi'

const Second=()=>{
    return(
        <div className="Second">
            
            <div className="secondWrapper row">
                <div className="col-12 col-sm-6 col-md-3">
                    <Item title="Instant Payouts" brief='Receive the funds instantly' icon={BiTimer}/>

                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <Item title='100% Guarantee' brief='We have a 99% completion rate' icon={BiBadgeCheck}/>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <Item title='Low Fees' brief='We charge as little as possible' icon={BiWallet}/>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <Item title='24HR Support' brief='Round the clock support to support any issues' icon={BiTimeFive}/>
                </div>

            </div>

            <style jsx>
                {`
                .Second{
                    background-color:white;
                    display:flex;
                    justify-content:center;
                    padding-top:80px;
                    min-height:400px;
                }
                .secondWrapper{
                    width:90%;
                }


                `}
            </style>
        </div>
    )
}

export default Second
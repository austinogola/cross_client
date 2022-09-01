import { FiCircle,FiDisc } from "react-icons/fi";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import ProgressBar from "components/dash/ProgressBar";
import Initiated from "components/transfer/Initiated";
import Pending from "components/transfer/Pending";
import Processing from 'components/transfer/Processing'

const Mimi=()=>{
    const router = useRouter()
    const trans_id=router.query.pid

    const [transaction,setTransaction]=useState({
        
    })
    const [status,setStatus]=useState('initiated')

    const getTrans=()=>{
        try{
            fetch(`http://localhost:4000/transaction/${trans_id}`,{
                method:'GET',
                headers:{
                    'Content-Type':"application/json",
                    "jwtToken":localStorage.token
                }
            }).then(async response=>{
                const resp=await response.json()
                const trans=resp.transaction;
                transaction=trans
                setStatus(transaction.status)
                
    
            })
        }catch(err){
            console.log(err.message);
        }
    }

    getTrans()

    // useEffect(()=>{
    //     console.log(transaction);
    // })

    // const statuses=['initiated','details','pending','processing','complete','canceled']
    const statuses={
        'initiated':2,
        'pending':3,
        'processing':4,
        'complete':5
    }

    console.log(statuses[status]);

    return(
        <div>
            <div className="header border">
                <div className="logo">
                    <h4>LogoHere</h4>
                </div>
            </div>


           <ProgressBar status={statuses[status]}/>

    
            <div className="container">
            {
            status=='initiated'?<Initiated/>:
            status='pending'?<Pending/>:
            status='processing'?<Processing/>:
            status='complete'?<Complete/>:null
            
           }
            </div>


            <style jsx>{`
                    .header{
                        padding-left:20px;
                        height:50px;
                        margin-bottom:20px;
                    }
                    
                `}</style>
        </div>
    )
}


export default Mimi
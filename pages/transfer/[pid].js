import { FiCircle,FiDisc } from "react-icons/fi";
import { useRouter } from "next/router";
import { useState } from "react";
import ProgressBar from "components/dash/ProgressBar";
import Initiated from "components/transfer/Initiated";

const Mimi=()=>{
    const router = useRouter()
    const trans_id=router.query.pid

    const [transaction,setTransaction]=useState({
        
    })



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
            setTransaction(trans)
            console.log(transaction.status);

        })
    }catch(err){
        console.log(err.message);
    }

    // const statuses=['initiated','details','pending','processing','complete','canceled']
    const statuses={
        'initiated':1,
        'pending':2,
        'processing':3,
        'complete':5
    }

    return(
        <div>
            <div className="header border">
                <div className="logo">
                    <h4>LogoHere</h4>
                </div>
            </div>

           

           <ProgressBar status={statuses[transaction.status]}/>

        
            <div className="container">
                <Initiated />
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
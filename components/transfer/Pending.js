import { useState } from "react"
import { useRouter } from "next/router";

const Pending=()=>{

    const [phone,setPhone]=useState()
    const router = useRouter()
    const trans_id=router.query.pid

    const getUser=async()=>{
        const token=localStorage.getItem('token')
        const res=await fetch("http://localhost:4000/auth/user",{
            method:'GET',
            headers:{jwtToken:token}
        })

        let user_id=await res.json()
        return user_id
    }

    const getPhone=async()=>{
        const user_id=await getUser()
        const res=await fetch("http://localhost:4000/profile",{
            method:'POST',
            headers:{jwtToken:localStorage.token,'Content-Type':"application/json"},
            body:JSON.stringify({
                user_id:user_id
            })
        })

        let response=await res.json()
        const userData=response.data.rows[0]

        setPhone(userData.phone)
    }


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
                const transaction=resp.transaction;
                console.log(transaction);

                setPhone(transaction.fromid)
                
    
            })
        }catch(err){
            console.log(err.message);
        }
    }

    getTrans()
    return(
        <div className="Pending">
            <div className="pendingWrapper">
                <div className="card">

                    <h6>Make payment to Details Below</h6>
                    <div className="border">
                        <h5>Till No. 254254</h5>
                        <h5>Account Number:{phone}</h5>
                        
                    </div>


                    <h5>Do not close this tab.</h5>
                    <h6>It will update automatically</h6>
                </div>
            </div>

            <style jsx>{`
                .pendingWrapper{
                    padding:20px;
                    display:flex;
                    justify-content:center;
                }
            `}</style>
        </div>
    )
}


export default Pending
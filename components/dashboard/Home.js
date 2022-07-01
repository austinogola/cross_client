import { useState } from "react"



const Home=()=>{

    const [details,setDetails]=useState({
        phone:'',
        email:"",
        fname:'',
    })

    const getUser=async()=>{
        const token=localStorage.getItem('token')
        const res=await fetch("http://localhost:4000/auth/user",{
            method:'GET',
            headers:{jwtToken:token}
        })

        let user_id=await res.json()
        return user_id
    }

    const getDetails=async()=>{
        const user_id=await getUser()
        const res=await fetch("http://localhost:4000/profile",{
            method:'POST',
            headers:{jwtToken:localStorage.token,'Content-Type':"application/json"},
            body:JSON.stringify({
                user_id:user_id
            })
        })

        let response=await res.json()
        const userDetails=response.data.rows[0]
        setDetails({...details,phone:userDetails.phone,email:userDetails.email,fname:userDetails.fname})
    }

    getDetails()


    const sampleTrans=[
        {type:"Cross",from:"mpesa",to:'skrill',amount:'1000(KES)',status:'complete',code:1},
        {type:"Cross",from:"paypal",to:'skrill',amount:'1000(KES)',status:'pending',code:2}
    ]

    const hist=(
        <tbody>
            {sampleTrans.map(row=><tr key={row.code}>
                <td style={{paddingLeft:'5px'}}>{row.type}</td>
                <td style={{paddingLeft:'5px'}}>{row.from}</td>
                <td style={{paddingLeft:'5px'}}>{row.to}</td>
                <td style={{paddingLeft:'5px'}}>{row.amount}</td>
                <td style={{paddingLeft:'5px'}}>{row.status}</td>
            </tr>)}
        </tbody>
        )

    return(
        <div className="HomePage">
            <div className="welcome">
                <h5>Welcome, {details.fname}</h5>
            </div>
            <div className="verification">
                <h3>Verified?</h3>
            </div>
            <div className="meCard">
                <div className='profLetters'>
                    <h5>J D</h5>
                </div>
                <div>
                    <h4>John Doe</h4>
                    <p>johndoe@gmail.com</p>
                </div>
            </div>
            <div className="samle">
                <h4>Activity Log</h4>
                {sampleTrans?<table className='historyTable'>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {hist}
                    </table>:<p>No recent history</p>}
            </div>
            <style jsx>{`
                .meCard{
                    background-color:#F6F8FC;
                    height:120px;
                    padding:10px;
                    display:flex;
                    align-items:center;
                    margin-bottom:20px;
                    margin-top:20px;
                }
                .profLetters{
                    height:50px;
                    width:50px;
                    border-radius:50%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border:2px solid #8B92AE;
                    padding-top:5px;
                    margin-right:20px;
                }
                table{
                    padding:10px;
                    border:red solid 1px;
                    overflow-x:auto;
                }
                th,td{
                    padding:5px;
                }
            `}</style>
        </div>
    )
}


export default Home

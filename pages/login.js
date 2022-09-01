import Navbar from "components/Navbar"
import Footer from "components/Footer"
import LoginBody from "components/LoginBody"
import { useState } from "react"
import { useRouter } from "next/router"

const Login=()=>{
    const [err,setErr]=useState('')

    return(
        <div className="login">
            <Navbar showRight={true} crosser={false}/>
            <LoginBody/>
        </div>
    )
}


export default Login
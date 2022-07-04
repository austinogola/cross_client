import Navbar from "components/Navbar"
import Footer from "components/Footer"
import { useState } from "react"
import { useRouter } from "next/router"

const Login=()=>{
    const [userData,setUserData]=useState({
        email:'',
        phone:'',
        password:'',
    })

    const [err,setErr]=useState('')

    const router=useRouter()

    const pwdSame=(first,second)=>{
        return first===second
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setErr('')
        const {fname,lname,phone,email,password}=userData

        fetch('http://localhost:4000/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                phone:phone,
                email:email,
                password:password
            })
        }).then(async response=>{
            const res=await response.json()
            if(res){
                if(res.token){
                    localStorage.setItem('token',res.token)
                    router.push('/dash')
                }else{
                    setErr('Invalid credentials.Please check details and retry')
                }
            }else{
                setErr('Server Error.Please try again later')
            }
        }).catch(error=>{
            setErr('Server Error.Please try again later')
        })
    }
    
    const handleChange = (event) => {
        event.preventDefault()
        const value=event.target.value
        setUserData({...userData,[event.target.name]:value});
      }

    return(
        <div>
            <Navbar showRight={false}/>
            <div className="regBody">
                <div>
                    <div className="formText">
                        <h3>Log in to your account</h3>
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </div>
                    {err?<div className="errorMessage">
                        <p>{err}</p>
                    </div>:null}
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input required onChange={handleChange} type="email" className="form-control" name='email'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone no.</label>
                            <input required onChange={handleChange} type="number" className="form-control" name='phone'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input required onChange={handleChange} type="password" className="form-control" name='password'/>
                        </div>
                        <div className="form-group mt-4 regBtn">
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
            <style jsx>{`
                .regBody{
                    background-color:#37517E;
                    display:flex;
                    justify-content:center;
                    /* align-items:center; */
                    padding-top:30px;
                    padding-bottom:30px;
                    height:600px;
                }
                .regBody>div{
                    background:white;
                    padding:20px;
                    width:30%;
                    border-radius:5px;
                    height:400px;
                }
                .formText{
                    text-align:center;
                }
                .formText a{
                    color:#37517E;
                    text-decoration:none;
                    font-weight:bold;
                }
                .regBtn{
                    display:flex;
                    justify-content:center;
                }
                .regBtn>button{
                    width:80%;
                    border-radius:5px;
                    border:none;
                    height:40px;
                    transition:.5s;
                    border:#37517E solid 1px;
                    background:white;
                }
                .regBtn>button:hover{
                    background-color:#37517E;
                    color:white;
                }
                .errorMessage{
                    background-color: #F2DFDF;
                    border-radius: 5px;
                    color: #B65E5C;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content:center;
                    padding-top:15px;
                }

                @media (max-width:800px){
                    .regBody>div{
                        background:white;
                        padding:20px;
                        width:60%;
                    }
                }
                @media (max-width:520px){
                    .regBody>div{
                        background:white;
                        padding:20px;
                        width:80%;
                    }
                }
            `}</style>
            <Footer/>
        </div>
    )
}


export default Login
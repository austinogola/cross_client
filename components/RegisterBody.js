import Navbar from "components/Navbar"
import Footer from "components/Footer"
import { useState } from "react"
import { useRouter } from "next/router"
import Logo from "./Logo"

const RegisterBody=()=>{
    const [userData,setUserData]=useState({
        first_name:'',
        last_name:'',
        email:'',
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
        const {first_name,last_name,email,password}=userData

        try {
            fetch('http://localhost:4000/auth/register',{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                first_name:first_name,
                last_name:last_name,
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
            
        } catch (error) {
            setErr('Cannot Fetch at the moment.Please try later.')
        }

        
    }
    
    const handleChange = (event) => {
        event.preventDefault()
        const value=event.target.value
        setUserData({...userData,[event.target.name]:value});
      }

    return(
        <div className="RegisterBody">
            <div className="adsWrapper">
                <div className="ads">
                    <div className="adsText">
                        <h3>Your Digital Cash Wherever</h3>
                        <h3>Deposit,Transfer,Withdraw</h3>
                    </div>
                    <div className="adsIcon">
                        <div className=""><p>Something big</p></div>
                        <div>Some text</div>
                    </div>
                    <div className="adsShow">
                        <p>Transfer seamlessly across 20+ wallets</p>
                    </div>
                </div>
            </div>
        
            <div className="signupForm">
                <form action="" onSubmit={handleSubmit}>

                    <div className="formText">
                        <h5>Register</h5>
                        <p>Already have an account? <a href="/login">Log in</a></p>
                    </div>

                    {err?<div className="errorMessage">
                        <p>{err}</p>
                    </div>:null}
                    
                    <div className="names">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input required onChange={handleChange} type="text" className="form-control" name='first_name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input required onChange={handleChange} type="text" className="form-control" name='last_name'/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" required onChange={handleChange} className='form-control' name='email'/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input required onChange={handleChange} type="password" className="form-control" name='password'/>
                    </div>
                    <div className="form-group mt-4 regBtn">
                        <button type="submit">Register</button>
                    </div>
                    <div className="forgotText">
                        <a href="/forgot">Forgot your password?</a>
                    </div>
                </form>
                
            </div>
            <div className="smallFooter">
                    <div className="one">Privacy Notice</div>
                    <div className="one two">Cookie Notice</div>
                    <div className="one"> Cookie Settings</div>
                </div>
            {/* <Navbar showRight={true}/>
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
            </div> */}
            <style jsx>{`
                .RegisterBody{
                    height:600px;
                    background-color:#37517E;
                    display:grid;
                    grid-template-columns:1fr 1fr;
                }
                .adsWrapper{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                .ads{
                    border:yellow 1px solid;
                    display:grid;
                    grid-template-rows:1fr 1fr 1fr;
                    height:300px;
                    width:80%;
                }
                .adsText{
                        color:white;
                        letter-spacing: 2px;
                        line-height: 1.2;
                        height:200px;
                        margin-bottom:20px;
                        text-align:center;
                    }
                .ads>div{
                    
                }
                .adsShow>p{
                    font-size:12px;
                    text-align:center;
                    color:white;
                }
                .adsIcon{
                    display:grid;
                    grid-template-columns:30% 70%;
                    border:1px solid red;
                }

                .signupForm{
                    display:flex;
                    justify-content:center;
                    height:500px;
                    padding-top:50px;
                    margin-bottom:50px;
                }
                form{
                    background-color:white;
                    width:70%;
                    padding:30px;
                    border-radius:12px;
                    padding-left:40px;
                    paddin-right:40px;
                }
                input{
                    background:#F5F5F5;
                    border:none;
                    border-bottom:1px #989898 solid;
                }
                .form-group{
                    margin-bottom:24px;
                }
                .names{
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    grid-gap:10px;
                }
               
                label{
                    font-size:12px;
                }
                .formText{
                    text-align:center;
                }
                .forgotText{
                    text-align:center;
                }
                .forgotText>a{
                    color:#37517E;
                    font-size:14px;
                    text-decoration:none;
                }
                .formText p{
                    font-size:14px;
                }
                .formText a{
                    color:#37517E;
                    font-size:15px;
                    text-decoration:none;
                    font-weight:bold;
                }
                .smallFooter{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
                .regBody{
                    background-color:#37517E;
                    display:flex;
                    justify-content:center;
                    /* align-items:center; */
                    padding-top:30px;
                    padding-bottom:30px;
                    height:650px;
                }
                .regBody>div{
                    background:white;
                    padding:20px;
                    width:30%;
                    border-radius:5px;
                    height:400px;
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
                    background:#E0E0E0;
                    color:#8B8B8B;
                }
                .regBtn>button:hover{
                    background-color:#37517E;
                    color:white;
                }
                .one{
                    color:white;
                    
                    padding:10px;
                }
                .two{
                    border-left:2px white solid;
                    border-right:2px white solid;
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
        </div>
    )
}


export default RegisterBody
import { useState,useEffect } from 'react'
import HomeNav from "components/dashboard/HomeNav"
import SideNav from "components/dashboard/SideNav"
import Home from 'components/dashboard/Home'
import Help from 'components/dashboard/Help'
import Cross from 'components/dashboard/Cross'
import Settings from 'components/dashboard/Settings'
import { usePageContext } from 'context/page'



const Dashboard=()=>{

    const [authenticated,setAuthenticated]=useState(false)

    const[isLoading,setLoading]=useState(true)

    const [showPage,setShowPage]=usePageContext()


    const checkAuth=async()=>{
        fetch('http://localhost:4000/auth/verify',{
          method:'GET',
          headers:{jwtToken:localStorage.token}
        }).then(async response=>{
          const res=await response.text()
          setLoading(false)
          res=='true'?setAuthenticated(true):setAuthenticated(false)
        }).catch(err=>{
          setLoading(false)
          setAuthenticated(false)
          setErr("Server Error")
        })
      }


    checkAuth()


    if(isLoading){
    return(
        <div>Loading</div>
    )
    }else{
        if(authenticated){
            return(
                <div className="Dashboard">
                    <HomeNav/>
                    <div className="dash">
                        <div className="sideWrapper">
                            <SideNav/>
                        </div>
                        <div className="dashContent ">
                            <div className="dashContentWrapper border">
                            {
                              showPage=='Home'?<div><Home/></div>
                              :showPage=='Cross'?<div><Cross/></div>
                              :showPage=='Settings'?<div><Settings/></div>
                              :<div><Help/></div>
                            }
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                        .dash{
                            display:grid;
                            grid-template-columns:25% 75%
                        }
                        .sideWrapper{
                            height:500px;
                            background-color:#E0E0E0;
                        }
                        .dashContent{
                            padding:20px;
                        }
                        .dashContentWrapper{
                            padding:10px;
                            border:1px solid grey;
                            border-radius:3px;
                        }
                    `}</style>
                </div>
            )
        }
        else{
            return(
                <div style={{padding:'50px'}}>
                    <div style={{backgroundColor:'#FCF8E3',padding:"20px",borderRadius:'3px'}}>
                        <h5 style={{color:'#F76000'}}>Message</h5>
                        <h3>Authentication required</h3>
                        <h5 style={{color:'#F76000'}}>Please login to proceed</h5>
                        <div>
                            <button style={{backgroundColor:"#383838",border:'none',marginRight:'10px'}}>
                                <a href="/" style={{textDecoration:'none',color:"white"}}>Home</a>
                            </button>
                            <button style={{backgroundColor:"#00B6F3",border:'none'}}>
                                <a href="/login" style={{textDecoration:'none',color:"white"}}>Login</a>
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
       
     }

    
}



export default Dashboard
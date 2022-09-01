import { FiMenu } from "react-icons/fi";
import Home from "components/dash/Home";
import Settings from "components/dash/Settings";
import Help from "components/dash/Help";
import Cross from "components/dash/Cross";
import { usePageContext } from 'context/page'
import { useState,useEffect } from 'react'
import Logo from "components/Logo";

const Dash=()=>{
    const [showPage,setShowPage]=usePageContext()

    const [authenticated,setAuthenticated]=useState(false)
    const[isLoading,setLoading]=useState(true)

    const checkAuth=async()=>{
        console.log('Checking auth');
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


    

    const changePage=(e)=>{
        setShowPage(e.target.textContent)
        const sideItems=document.querySelectorAll('.sideBarItem')
        sideItems.forEach(item=>{
            if(item!=e.target){
                item.classList.remove('active')
            }
        })
        e.target.classList.add('active')
    }

    const toggleSide=()=>{
        const sideBar=document.querySelector(".sideBar")
        // if(sideBar.style.display=='none'){
        //     sideBar.style.display='flex'
        // }else{
        //     sideBar.style.display='none'
        // }
        sideBar.classList.toggle('active')
    }

    if(isLoading){
        return(
            <div>Loading</div>
        )
    }
    else{
        if(authenticated){
            return (
                <div className="Dash">
                    <div className="header border">
                        <div className="logo">
                            <div className="bars" onClick={toggleSide}>
                                <FiMenu style={{color:'black',fontSize:'1.5em'}}/>
                            </div>
                            <h4>LogoHere</h4>
                        </div>
                        <div className="headerContent">
                            
                        </div>
                    </div>
    
                    <div className="body">
                        <div className="sideBar">
                            <div className="sideBarWrapper">
                                <div className="sideBarItem" onClick={changePage}>
                                    <h6>HOME</h6>
                                </div>
                                <div className="sideBarItem" onClick={changePage}>
                                    <h6>CROSS</h6>
                                </div>
                                <div className="sideBarItem" onClick={changePage}>
                                    <h6>SETTINGS</h6>
                                </div>
                                <div className="sideBarItem" onClick={changePage}>
                                    <h6>HELP</h6>
                                </div>
                            </div>
                        </div>
    
                        <div className="bodyContent">
                            <div className="bodyWrapper">
                                {
                                    showPage=='HOME'?<Home/>
                                    :showPage=='CROSS'?<Cross/>
                                    :showPage=='SETTINGS'?<Settings/>
                                    :<Help/>
                                }
                            </div>
                        </div>
                    </div>
                    {/* <div className="sideBar ">
                        <div className="logo border">
                            <div className="bars">
                            <FiMenu/>
                            </div>
                            <h6>LogoHere</h6>
                        </div>
                        <div className="sideBarContent">
                            
                        </div>
                    </div>
                    <div className="content">
                        <div className="contentHeader">Other</div>
                    </div> */}
    
                    <style jsx>{`
                                    .Dash{
                                        
                                    }
                                    .header{
                                        display:grid;
                                        grid-template-columns:15% 85%;
                                        height:60px;
                                    }
                                    .logo{
                                        height:50px;
                                        padding-left:20px;
                                        display:flex;
                                        justify-content:start;
                                        align-items:center;
                                    }
                                    .bars{
                                        height:16px;
                                        position:relative;
                                        bottom:7px;
                                        display:none;
                                        margin-right:10px;
                                        cursor:pointer;
                                    }
                                    .body{
                                        display:grid;
                                        grid-template-columns:15% 85%;
                                    }
                                    .sideBar{
                                        background-color:#37517E;
                                        height:600px;
                                        transition:.4s;
                                    }
                                    .sideBarWrapper{
                                        padding-top:10px;
                                    }
                                    .sideBarWrapper>div{
                                        color:white;
                                        margin-bottom:10px;
                                    }
                                    .sideBarContent{
                                        padding-top:10px;
                                        height:300px;
                                        display:flex;
                                        flex-direction:column;
                                    }
                                    .sideBarItem{
                                        padding-left:20px;
                                        width:100%;
                                        height:50px;
                                        display:flex;
                                        justify-content:start;
                                        align-items:center;
                                        cursor:pointer;
                                        transition:.3s;
                                    }
                                    .sideBarItem.active{
                                        background-color:#2C4064;
                                    }
                                    .sideBarItem:hover{
                                        background-color:#2C4064;
                                    }
                                    
                                    .content{
                                        padding:10px;
                                    }
                                    .bodyContent{
                                        display:flex;
                                        justify-content:center;
    
                                    }
                                    .bodyWrapper{
                                        width:90%;
                                        padding-top:50px;
                                       
                                    }
    
                                    @media only screen and (max-width:860px){
                                        .header{
                                            display:grid;
                                            grid-template-columns:20% 80%;
                                        }
                                        .body{
                                            display:grid;
                                            grid-template-columns:20% 80%;
                                        }
                                    }
    
                                    @media only screen and (max-width:720px){
                                        .body{
                                            display:block;
                                            grid-template-columns:100%;
                                        }
                                        .bodyWrapper{
                                            width:75%;
                                        }
                                        .sideBar{
                                            display:none;
                                        }
                                        .sideBar.active{
                                            position:fixed;
                                            display:block;
                                            width:30%;
                                        }
                                        .bars{
                                            display:block;
                                        }
                                    }
    
                                    @media only screen and (max-width:480px){
                                        .bodyWrapper{
                                            width:95%;
                                        } 
                                    }
    
                                    
                                    
                                `}</style>
                </div>
            );
        }else{
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


export default Dash
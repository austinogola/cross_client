

const Navbar=(props)=>{
    const toggleLinks=(e)=>{
        e.preventDefault()
        const navbarLinks=document.querySelector('.navbarLinks')
        navbarLinks.classList.toggle('active')
    }
    return(
        <div className="navWrapper">
            <nav className="Navbar">
                <div className="brandLogo">
                    <div className="crosspesa">
                        <h4>CrossPesa</h4>
                    </div>
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
                    <div className="box5"></div>

                </div>
                {props.showRight?<div>
                    <a href="#" className="toggler" onClick={toggleLinks}>
                        <span className="bars"></span>
                        <span className="bars"></span>
                        <span className="bars"></span>
                    </a>
                    <div className="navbarLinks">
                        <ul>
                            <li className="navItems"><a href="">How To</a></li>
                            <li className="navItems"><a href="">FAQs</a></li>
                            <li className="navItems"><button className="logButton"><a href="/login">Login</a></button></li>
                            <li className="navItems"><button className="regButton"><a href="/register">Signup</a></button></li>
                        </ul>
                    </div>
            </div>:null}
            
        </nav>
        <style jsx>{`
                .navWrapper{
                    display:flex;
                    justify-content:center;
                    height:75px;
                }
                .Navbar{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    background-color:white;
                    width:80%;
                }
                .brandLogo{
                    background-color:#0077BE;
                    height:36px;
                    padding-left:10px;
                    padding-right:10px;
                    
                }
                
                .crosspesa{
                    font-family: 'Teko', sans-serif;
                    display:flex;
                    justify-content:center;
                    font-weight:bold;
                    color:white;
                    width:100px;
                    
                }
                .box1{
                    position:relative;
                    bottom:10px;
                    right:22px;
                    width:12px;
                    height:12px;
                    background-color:#00B0ED;
                }
                .box2{
                    bottom:42px;
                    right:40px;
                    width:20px;
                    height:20px;
                    background-color:#0077BE;
                    position:relative;
                }
                .box3{
                    bottom:42px;
                    right:50px;
                    width:12px;
                    height:12px;
                    background-color:#00A8A0;
                    position:relative;
                }
                .box4{
                    bottom:90px;
                    right:50px;
                    width:18px;
                    height:18px;
                    background-color:#00A8A0;
                    position:relative;
                }
                .box5{
                    bottom:500px;
                    right:50px;
                    width:22px;
                    height:22px;
                    background-color:red;
                    position:relative;
                }
                .crosspesa h4{
                    font-size:30px;
                }
                .ash{
                    position:relative;
                    right:6px;
                }
                
                .brandLogo a{
                    text-decoration:none;
                    color:#0B2840;
                    font-family:serif;
                    font-weight:bold;
                }
                 .navbarLinks{
                    display:flex;
                    justify-content:center;
                    background-color:white;
                    width:100%;

                }

                .navbarLinks ul{
                    margin:0;
                    padding:0;
                    display:flex;

                }
                .navItems{
                    list-style:none;
                    cursor:pointer;
                    margin:1rem;
                }
                .navItems a{
                    text-decoration:none;
                    color:#253655;
                    font-size: 16px;
                    font-weight:500 ;
                }
                {/*
                .navItems button{
                    margin-right:1rem;
                } */}
                .toggler{
                    position:absolute;
                    top:0.75rem;
                    right:1rem;
                    display:none;
                    flex-direction:column;
                    justify-content:space-between;
                    width:30px;
                    height:21px;
                }
                .bars{
                    width:100%;
                    background-color:black;
                    height:3px;
                    border-radius:10px;

                }
                .navItems button{
                    outline: none;
                    border: none;
                    border-radius:3px;
                }
                .regButton{
                    background-color: #2EAD4B;
                }
                .logButton{
                    background-color: #37517E;
                }
                .regButton a,.logButton a{
                    color:white;
                }
                li{
                    
                }


                @media (max-width:700px){
                    .Navbar{
                        width:100%;
                    }
                }
                @media (max-width:540px){
                    .toggler{
                        display:flex;
                    }   
                    .navbarLinks{
                        display:none;

                    }
                    .Navbar{
                        flex-direction:column;
                        align-items:center;
                    }
                    .navbarLinks ul{
                        flex-direction:column;
                        width:100%;
                        justify-content:center;
                    }
                    .navItems{
                        text-align:center
                    }
                    .navItems a{
                        padding:.5rem 1rem;
                        text-align:center;
                    }
                    .navbarLinks.active{
                        display:flex;
                    }
                }
            `}
            </style>
        </div>
    )
}


export default Navbar
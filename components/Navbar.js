

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
                    <h2><a href='/'>LogoHere</a></h2>
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
                }
                .Navbar{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    background-color:white;
                    width:80%;
                }
                .brandLogo{
                    font-size:1.5rem;
                    margin:.5rem;
                    font-weight:bolder;
                }
                .brandLogo a{
                    text-decoration:none;
                    color:#0B2840;
                    font-family:Helvetica
                }
                 .navbarLinks{
                    display:flex;
                    justify-content:center;
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
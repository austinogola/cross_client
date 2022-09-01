import Logo from "./Logo"

const Navbar=(props)=>{
    const toggleLinks=(e)=>{
        e.preventDefault()
        const navMenu=document.querySelector('.nav-menu')
        navMenu.classList.toggle('active')
    }
    return(
        <div className="navWrapper">
            <nav className="Navbar">
                <Logo showCross={props.crosser}/>
                {props.showRight?
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="/how" className="nav-link">How To</a>
                    </li>
                    <li className="nav-item">
                        <a href="/FAQs" className="nav-link">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <button className="loginBtn">
                            <a href="/login" className="nav-link">Log In</a>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="signupBtn">
                            <a href="/register" className="nav-link">Sign Up</a>
                        </button>
                    </li>
                </ul>
                :null}

                <div className="hamburger" onClick={toggleLinks}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                

            </nav>
        <style jsx>{`
                .navWrapper{
                    padding-left:60px;
                }
                .Navbar{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 1.2rem;
                }
                li {
                    list-style: none;
                }

                a {
                    text-decoration: none;
                }
                .hamburger {
                    display: none;
                }
                .logo{
                    height:32px;
                    position:relative;
                    bottom:12px;
                }

                .bar {
                    display: block;
                    width: 25px;
                    height: 3px;
                    margin: 5px auto;
                    -webkit-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                    background-color: #101010;
                }
                .crosspesa{
                    font-family: 'Teko', sans-serif;
                    background-color:#0077BE;
                    color:white;
                    height:40px;
                    width:105px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    
                }
                .crosspesa>h4{
                    position:relative;
                    top:6px;
                    font-size:28px;
                }
                
                .nav-menu {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .nav-item {
                    margin-left: 1.8rem;
                }
                .signupBtn{
                    background-color: #2EAD4B;
                    color:white;
                    border:none;
                    height:36px;
                    display:flex;
                    align-items:center;
                }
                .signupBtn:hover{
                    background-color:#2EAD4B;
                }
                .loginBtn{
                    background-color: #37517E;
                    color:white;
                    border:none;
                    height:36px;
                    display:flex;
                    align-items:center;
                }

                .nav-link{
                    font-size: 1rem;
                    font-weight: 600;
                    color: #475569;
                }
                button>.nav-link{
                    color:white;
                }
                button{
                    border:none;
                    border-radius:5px;
                    height:40px;
                }
                .nav-link:hover{
                    color: #482ff7;
                }
                .nav-logo {
                    font-size: 2.1rem;
                    font-weight: 500;
                    color: #482ff7;
                }
                @media only screen and (max-width: 720px) {
                    .nav-menu {
                        position: fixed;
                        left: -100%;
                        top: 5rem;
                        flex-direction: column;
                        background-color: #fff;
                        width: 100%;
                        border-radius: 10px;
                        text-align: center;
                        transition: 0.3s;
                        box-shadow:
                            0 10px 27px rgba(0, 0, 0, 0.05);
                    }
                    .nav-menu.active {
                        left: 0;
                    }

                    .nav-item {
                        margin: 2.5rem 0;
                    }

                    .hamburger {
                        display: block;
                        cursor: pointer;
                    }
                }

            `}
            </style>
        </div>
    )
}


export default Navbar
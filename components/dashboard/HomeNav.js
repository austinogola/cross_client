
const HomeNav=()=>{
    const logout=()=>{
        localStorage.removeItem('token')
    }
    return(
        <div className='navWrapper'>
            <nav className='nav'>
                <div className="brandLogo">
                    <h2><a href='/profile'>LogoHere</a></h2>
                </div>
                <div className='navItems'>
                    <ul>
                        <li className='navLink'><a href='/register'>Name Here</a></li>
                        <li className='navLink'>
                            <button className="logoutBtn" onClick={logout}><a href='/'>Logout</a></button>
                        </li>
                    </ul>
                </div>
            </nav>
            <style jsx>{`
                 .navWrapper{
                    display: flex;
                    justify-content: center;
                    border-bottom: 1px solid #C1C1C1;
                    height: 75px;
                    align-items:center;
                    padding-left:10px;
                    padding-right:10px;
                }
                .nav{
                    display: flex;
                    background-color: white;
                    align-items: center;
                    justify-content: space-between;
                    width: 99%;
                }
                .brandLogo{
                    font-size:1.5rem;
                    margin:.5rem;
                    font-weight:bolder;
                }
                .brandLogo a,{
                    text-decoration:none;
                    color:#0B2840;
                    font-family:Helvetica
                }
                .navItems{
                    display: flex;
                    align-items:center;
                }
                
                .navItems ul{
                    display: flex;
                    flex-direction: row;
                    padding-top:10px;
                }
                
                .navLink{
                    list-style: none;
                    margin-left:20px;
                }
                .navlink a{
                    text-decoration: none;
                    color: #551A8B;
                }
                .logoutBtn{
                    border:2px solid #37517E;
                    border-radius:999px;
                    background:white;
                    width:100%;
                }
                .logoutBtn a{
                    text-decoration:none;
                    color:#37517E;
                    font-weight:500;
                }
            `}</style>
        </div>
    )
}


export default HomeNav
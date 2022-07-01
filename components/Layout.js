
const Header=()=>{
    <div>
        <h2>This is the Header</h2>
    </div>
}

const SideNav=()=>{
    <div>
        SideNav Here
    </div>
}

const Footer=()=>{
    <div>
        Footer Here
    </div>
}

const Layout=({children})=>{
    return(
        <>
            <div style={{display:'grid',gridTemplateColumns:'30% 70%'}} >
                <div>
                    <SideNav/>
                </div>
                <div>
                    <Header/>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default Layout
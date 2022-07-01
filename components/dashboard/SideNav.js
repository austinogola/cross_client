import { usePageContext } from 'context/page'


const SideNav=()=>{
    const [showPage,setShowPage]=usePageContext()

    const changePage=(e)=>{
        setShowPage(e.target.textContent)
    }

    return(
        <div className="SideNav">
            <div className="sidenavList">
                <div onClick={changePage}>Home</div>
                <div onClick={changePage}>Cross</div>
                <div onClick={changePage}>Settings</div>
                <div onClick={changePage}>Help</div>
            </div>
            <style jsx>{`
                .sidenavList{
                    height:300px;
                    width:100%;
                    
                }
                .sidenavList div{
                    margin:20px;
                    font-size:18px;
                    font-weight:bold;
                    color:#526474;
                    cursor:pointer;
                    width:100%;
                }
                .sidenavList div:hover{
                    background-color:white;
                }
            `}</style>
        </div>
    )
}


export default SideNav
import { useRouter } from "next/router";
import { BiHome } from "react-icons/bi";
import {FiSettings,FiBriefcase} from "react-icons/fi";
import{AiOutlineQuestion,AiOutlinePhone,AiOutlineOrderedList} from 'react-icons/ai'
import { usePageContext } from 'context/page'



const SideNav=()=>{
    const [showPage,setShowPage]=usePageContext()
    const router=useRouter()

    setShowPage('Home')

    const changePage=(e)=>{
        setShowPage(e.target.textContent)
        console.log(e.target.textContent);
    }
    return(
        <div className="SideNav">
            <div className="logo">
                <h4><a href="/">LogoHere</a></h4>
            </div>
            <div className="navItems">
                <div className="navLink" onClick={changePage}>
                    <div>
                        <div className="icon"><BiHome size={20}/></div>
                        <span>Home</span>
                    </div>
                </div>

                <div className="navLink" onClick={changePage}>
                    <div className="icon"><FiBriefcase size={20}/></div>
                    <span>Transfer</span>
                </div>

                <div className="navLink" onClick={changePage}>
                    <div className="icon"><FiSettings size={20}/></div>
                    <span>Settings</span>
                </div>

                <div className="navLink" onClick={changePage}>
                    <div className="icon"><AiOutlineOrderedList size={20}/></div>
                    <span>History</span>
                </div>

                <div className="navLink" onClick={changePage}>
                    <div className="icon"><AiOutlinePhone size={20}/></div>
                    <span>Contact Us</span>
                </div>

                {/* <div className="navLink">
                    <div className="icon"><AiOutlineQuestion size={20}/></div>
                    <span>Help</span>
                </div> */}
            </div>

            <style jsx>
                {`
                    .SideNav{
                        background-color:#37517E;
                        padding:10px;
                        height:650px;
                    }
                    .logo{
                        height:80px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        border-bottom:1px solid black;
                    }
                    .navItems{
                        
                    }
                    .navLink{
                        display:flex;
                        align-items:center;
                        height:50px;
                        padding-left:10px;
                        color:white;
                        transition:.3s;
                        cursor:pointer;
                    }
                    .navLink:hover{
                        background-color:#2E4369;
                    }
                    .navLink>div{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }
                    .icon{
                        display:flex;
                        align-items:center;
                        margin-right:10px;
                    }
                    span{
                        position:relative;
                        top:3px;
                        font-size:12px;

                    }
                `}
            </style>
        </div>
    )
}


export default SideNav
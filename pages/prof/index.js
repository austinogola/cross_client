import SideNav from "./SideNav"
import Header from "./Header"
import IndexContent from "./IndexContent"
import Cross from "./Cross"

const Home=()=>{
    return(
        <div>
            <div className='wrapper' >
                <div>
                    <SideNav/>
                </div>
                <div className="Content">
                    <Header location='Home'/>
                    <div className="content ">
                        {/* <IndexContent/> */}
                        < Cross />
                    </div>
                </div>
            </div>

            <style jsx>{`
                    .wrapper{
                        display:grid;
                        grid-template-columns:20% 80%;
                        height:100%;
                    }
                    .content,.Content{
                        background-color:#F3F6F8;
                        padding:15px;
                        padding-left:1em;
                    }
                    .content{
                        border:solid 1px #C1C1C1
                    }
                    @media (max-width:720px){
                        .wrapper{
                            display:grid;
                            grid-template-columns:30% 70%;
                        }
                        .content,.Content{
                            background-color:#F3F6F8;
                            padding:5px;
                            padding-left:1em;
                    }
                    }
                `}</style>
        </div>
    )
}

export default Home
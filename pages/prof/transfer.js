import SideNav from "./SideNav"
import Header from "./Header"

const Transfer=()=>{
    return(
        <div>
            <div className='wrapper' >
                <div>
                    <SideNav/>
                </div>
                <div>
                    <Header location='Transfer'/>
                    <div className="content">
                        Everything else
                    </div>
                </div>
            </div>

            <style jsx>{`
                    .wrapper{
                        display:grid;
                        grid-template-columns:30% 70%;
                        height:100%;
                    }
                    .content{
                        background-color:#F3F6F8;
                        padding:20px;
                        padding-left:2em;
                    }
                    @media (min-width 720px){
                        .wrapper{
                            display:grid;
                            grid-template-columns:50% 50%;
                        }
                    }
                `}</style>
        </div>
    )
}

export default Home
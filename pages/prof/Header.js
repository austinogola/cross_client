

const Header=(props)=>{
    return(
        <div className="Header">
            <div className="headerWrapper">
                <div className="location">
                    <h4>{props.location}</h4>
                </div>
                <div className="profile ">
                    <div className="initials">
                        <h6>A.O</h6>
                    </div>
                    <h6 className="name">Name Here</h6>
                </div>
            </div>

            <style jsx>{`
                    .Header{
                        border-bottom:1px solid black;
                        height:90px;
                        display:flex;
                        align-items:center;
                        padding:10px;
                    }
                    .headerWrapper{
                        width:100%;
                        display:grid;
                        grid-template-columns:40% 60%;
                    }
                    .profile{
                        display:flex;
                        align-items:center;
                        justify-content:flex-end;
                    }
                    .initials{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        padding:6px;
                        border:#2E4369 2px solid;
                        border-radius:50%;
                        background-color:#F1F3F4;

                    }
                    .initials>*{
                        position:relative;
                        top:2px;
                    }
                    .name{
                        margin-left:10px;
                    }
                `}</style>
        </div>
    )
}


export default Header
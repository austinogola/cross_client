import { useRouter } from "next/router"

const Logo=(props)=>{
    const router=useRouter()
    
    const goHome=()=>{
        router.push('/')
    }

    return(
        <div className="Logo" onClick={goHome}>
            {props.showCross?
            <div className="crosspesa">
                <h4>CrossPesa</h4>
            </div>
            :null}
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
            <div className="box4"></div>

            <style jsx>
                {`
                    .Logo{
                        height:32px;
                        position:relative;
                        bottom:12px;
                        cursor:pointer;
                        transition:.2s;
                    }
                    .crosspesa{
                        font-family:'Teko',sans-serif;
                        background-color:#0077BE;
                        color:white;
                        height:40px;
                        width:105px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        position:absolute;
                        
                    }
                    .crosspesa>h4{
                        position:relative;
                        top:6px;
                        font-size:28px;
                    }
                    .box1{
                        position:relative;
                        right:10px;
                        top:40px;
                        width:12px;
                        height:12px;
                        background-color:#00B0ED;
                    }
                    .box2{
                        top:9px;
                        right:29px;
                        width:20px;
                        height:20px;
                        background-color:#0077BE;
                        position:relative;
                    }
                    .box3{
                        top:8px;
                        right:41px;
                        width:12px;
                        height:12px;
                        background-color:#00A8A0;
                        position:relative;
                    }
                    .box4{
                        bottom:40px;
                        right:46px;
                        width:18px;
                        height:18px;
                        background-color:#00A8A0;
                        position:relative;
                    }
                `}
            </style>
        </div>
    )
}


export default Logo
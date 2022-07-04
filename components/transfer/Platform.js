import demo from './download.png'; 

const Platform=()=>{
    console.log(demo);
    return(
        <div className="Platform">

            <div className="show">
                <img src={require('/transfer/download.png')} alt="Demo" />
            </div>

            <style jsx>{`
                .show{

                }
                img{
                    width:20px;
                    height:20px;
                }
            `}</style>
        </div>
    )
}


export default Platform
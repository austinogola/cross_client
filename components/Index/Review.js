

const Review=(props)=>{
    return(
        <div className="col-12 col-md-6 p-3">
            <div className="card p-2">
                <h6>{props.name}, {props.date}, {props.time}</h6>
                <p>{props.review}</p>
            </div>
            <style jsx>
                {`
                    .col-4{

                    }
                    .card{
                        border:2px solid #F3F7FC;
                    }
                `}
            </style>
        </div>
    )
}


export default Review
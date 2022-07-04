import { useRouter } from 'next/router'
import { useEffect } from 'react'


const ProgressBar=(props)=>{
    const router=useRouter()
    const id=router.query.pid

    

    useEffect(()=>{
        let lists=document.querySelectorAll('li')
        
        for (let i = 0; i <props.status; i++) {
            lists[i].classList.add('active')
            lists[i].classList.add('complete')
            lists[i].classList.add('next')
            
        }
    })
    
    
    return(
        <div className="wrapper">
            <div className="root">
                <div className="containe">
                    <ul className="progressbar">
                        <li className="active complete next">Initiate transaction</li>
                        <li className="active">Confirm Details</li>
                        <li className="">Payment Details</li>
                        <li className="">Receive Funds</li>
                        <li>Completed</li>
                    </ul>
                </div>
            </div>

            <style jsx>{`
                .wrapper{
                    margin-bottom:20px;
                }
                .root{
                    display:flex;
                    justify-content:center;
                }
                .containe{
                    width: 150%;
                    position: relative;
                    right:20px;
                    z-index: 1;
                }
                .progressbar li{
                    float: left;
                    width: 20%;
                    position: relative;
                    text-align: center;
                    list-style:none;
                }
                .progressbar li:before{
                    content:counter(step);
                    counter-increment: step;
                    width: 30px;
                    height: 30px;
                    border: 2px solid #bebebe;
                    display: block;
                    margin: 0 auto 10px auto;
                    border-radius: 50%;
                    line-height: 27px;
                    background: white;
                    color: #bebebe;
                    text-align: center;
                    font-weight: bold;
                }
                .progressbar{
                    counter-reset: step;
                }
                .progressbar li:after{
                    content: '';
                    position: absolute;
                    width:100%;
                    height: 3px;
                    background: #979797;
                    top: 15px;
                    left: -50%;
                    z-index: -1;
                }
                .progressbar li:first-child:after{
                    content: none;
                    background: #3aac5d;
                }

                .progressbar li:first-child:before{
                    background: #3aac5d;
                    color: white;
                }

                .progressbar li.next + li:after{
                    background: #3aac5d;
                    
                }
                .progressbar li.active:before{
                    border-color: #3aac5d;
                    background: #3aac5d;
                    color: white;
                    
                }
                .progressbar li.complete:before{
                    content:'✓';
                    color:"white";
                    background: #3aac5d;
                    
                }
        

                
                `}</style>
        </div>
    )
}


export default ProgressBar
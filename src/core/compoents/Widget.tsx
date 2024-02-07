import React, { useState } from 'react'

type Props = {
    heading: string,
    children: React.ReactNode
}

export default function Widget({ heading, children }: Props) {
    const [dim,setDim] = useState({height:'300px',width:'400px'});
    function toggle(){
        if(dim.width == '400px'){
            setDim({height:'100vh',width:'100vw'})
        }else{
            setDim({height:'300px',width:'400px'})
        }
    }   
    return (
        <div style={{ width: dim.width,height:dim.height, margin:'20px',border:'2px solid gray' ,padding:'20px',backgroundColor:'orange'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>{heading}</div>
                <button onClick={toggle}>+</button>
            </div>
            <div>
                {
                    children
                }
            </div>
        </div>
    )
}
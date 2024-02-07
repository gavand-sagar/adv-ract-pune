import React, { useEffect, useState } from 'react'

type Props = {}

export default function LifeCycle({ }: Props) {

    const[value,setValue] = useState<number>(0);

    useEffect(()=>{
        console.log("VALUE CHANGED OUT",value);

        return ()=>{
            console.log("VALUE CHANGED RETURN",value);
        }
    },[value])


    useEffect(()=>{
        // // ON COMPONENT LOAD
        // let timer = setInterval(()=>{
        //     console.log("SOMETING")
        // },1000)

        // return ()=>{
        //     // ON COMPONENT DESTROYED
        //     clearInterval(timer)
        // }
        console.log("LOAD 2")
    },[])

    

    return (
        <fieldset>
            <button onClick={()=>setValue(value+1)}>Life</button>
            {value}
        </fieldset>
    )
}
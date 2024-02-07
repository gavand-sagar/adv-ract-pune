import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

type Props = {}

export default function MemoKaDemo({ }: Props) {

    const [name, setName] = useState('Sagar')

    const toggle = useCallback(() => {
        setName(name == "Sagar" ? "Amit" : "Sagar")
    }, [name])


    // const toggle = () => {
    //     setName(name == "Sagar" ? "Amit" : "Sagar")
    // }



    return (
        <div>
            MemoKaDemo
            <br />
            <button onClick={toggle}>CHANGE NAME</button>
            <br />
            <br />
            {name}
            <br />
            <br /><br /><br /><br /><br />
            <Child />
        </div>
    )
}
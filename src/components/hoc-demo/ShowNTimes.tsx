import React from 'react'

type Props = {
    count: number,
    children: React.ReactNode
}

export default function ShowNTimes({ count, children }: Props) {
    let array = [];
    for (let index = 0; index < count; index++) {
        array.push(children)
    }
    return (
        <div>{array}</div>
    )
}
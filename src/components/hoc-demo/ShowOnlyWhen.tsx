import React from 'react'

type Props = {
    children: React.ReactNode | React.ReactNode[]
}

export default function ShowOnlyWhenSpan({ children }: Props) {
    console.log(children)
    return (
        <>
            {(children as React.ReactNode[]).filter((x:any)=> x.type == "span")}
        </>
    )
}
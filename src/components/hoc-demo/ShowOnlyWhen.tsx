import React from 'react'

type Props = {
    children: React.ReactNode | React.ReactNode[]
}

export default function ShowOnlyWhen({ children }: Props) {
     console.log(children)
    return (
        <>
            {
                (new Date().getMinutes() == 21) && children
            }
        </>
    )
}
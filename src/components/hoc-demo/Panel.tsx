import React from 'react'

type Props = {
    heading?: React.ReactNode,
    body?: React.ReactNode
}

export default function Panel({ heading, body }: Props) {
    return (
        <div>
            <div>{heading}</div>
            <div>{body}</div>
        </div>
    )
}
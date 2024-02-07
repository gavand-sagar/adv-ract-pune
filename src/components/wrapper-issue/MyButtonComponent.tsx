import React, { MouseEventHandler } from 'react'

type Props = {
    children?: React.ReactNode,
    onClick?: MouseEventHandler<any> | undefined,
    onMouseEnter?: MouseEventHandler<any> | undefined
}

export default function MyButtonComponent({ children, onClick, onMouseEnter }: Props) {
    return (
        <button onClick={onClick} onMouseEnter={onMouseEnter}>{children}</button>
    )
}
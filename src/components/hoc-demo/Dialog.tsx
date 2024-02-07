import React from 'react'

type Props = {
    header: React.ReactNode,
    body: React.ReactNode,
    footer: React.ReactNode,
}

export default function Dialog({ header, body, footer }: Props) {
    return (
        <div className='modal-back'>
            <div className='modal-front'>
                <div style={{ background: 'orange' }}>{header}</div>
                <div>{body}</div>
                <div>{footer}</div>
            </div>
        </div>
    )
}
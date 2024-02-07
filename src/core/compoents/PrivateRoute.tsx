import React from 'react'
import { useRouteGuard } from '../hooks/useRouteGuard';

type Props = {
    children: React.ReactNode
}

export default function PrivateRoute({ children }: Props) {

    const isLoggedIn = useRouteGuard();
    return (
        <>{isLoggedIn && children}</>
    )
}
import React from 'react'
import dynamic from "next/dynamic";

const HomeBanner = dynamic(() => import('./components/HomeBanner/HomeBanner'))

const Home = () => {
    return (
        <HomeBanner />
    )
}

export default Home
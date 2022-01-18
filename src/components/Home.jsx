import React from 'react'
import Landing from './landing/Landing'

function Home() {

    let loginStatus = 0

    return (
        <div>
            {
                loginStatus ? <Landing/> : <Landing/>
            }
        </div>
    )
}

export default Home

import React from 'react'
import './styles/home.css'
import Footer from './Footer'
import Datafetcher from './Datafetcher'

export default function Home() {

    const [showChart, setShowChart] = React.useState(false);

    const handleClick = () => {
        setShowChart(true);
    }

    return (
        <div className='home'>
            <h1>Welcome to Data Visulazation</h1>
            <p>Click the button below to view the chat of our data.</p>
            {!showChart && <button className='btn-view-data' onClick={handleClick}>View Data</button>}
            {showChart && <Datafetcher></Datafetcher>}
            <Footer></Footer>
        </div>
    )
}

import './Info.scss'

export default function Info() {
    return (
        <main>
            <h1>Info Page</h1>
            <h2>Choose a city</h2>
            <div className='info__country-list'>
                <p className='info__city'>Barcelona, Spain</p>
                <p className='info__city'>Rome, Italy</p>
                <p className='info__city'>Nairobi, Kenya</p>
            </div>
            <h2>Information about Toronto</h2>
            <h3>Climate</h3>
            <p>Climate Info</p>
            <h3>Public transport</h3>
            <p>Transport Info</p>
            <h3>Safety</h3>
            <p>Safety Info</p>
            <h3>Environmental Quality</h3>
            <p>Enviro Info</p>
        </main>
    )
}
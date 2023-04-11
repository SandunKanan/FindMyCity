import './Home.scss'
import { Link } from 'react-router-dom'
import worldMap from '../../assets/images/World_Map_Cities.svg'
import Button from '../../components/Button/Button'

export default function Home() {
    return (
        <main className='home'>
            <h1>Find your dream city with ease on FindMyCity.</h1>
            <img className='home__map' src={worldMap} />
            <br/>
            <Link to='/findmycity'>
                <Button text="Find my City" />
            </Link>
            <p>Welcome to FindMyCity, the ultimate platform for discovering your dream city. Our mission is to help make the process of moving to a new city less daunting and more enjoyable. Whether you're seeking a new job opportunity, a change of scenery, or a fresh start, we make it easy for you to compare cities and find the perfect fit for your needs.</p>
            <br/>
            <p>Simply answer a few questions about your budget, work preferences, and desired lifestyle, and we'll suggest cities that match your criteria.</p>
        </main>
    )
}
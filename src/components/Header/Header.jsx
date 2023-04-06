import './Header.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <div className='header__content'>
                <h2>MyGlobalHome</h2>
                <div className='header__nav'>
                    <NavLink className='header__nav-item' to='/home'><h3>Home</h3></NavLink>
                    <NavLink className='header__nav-item' to='/findmycity'><h3>Find My City</h3></NavLink>
                    <NavLink className='header__nav-item' to='/compare'><h3>Compare</h3></NavLink>
                    <NavLink className='header__nav-item' to='/info'><h3>City Info</h3></NavLink>
                </div>  
            </div>
        </header>
    )
}
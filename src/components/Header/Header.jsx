import './Header.scss'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header(props) {
    const location = useLocation()
    const path = location.pathname

    return (
        <header className="header">
            <div className='header__content'>
                <a href='/'><h2 className='header__title'>FindMyCity</h2></a>
                <div className='header__nav'>
                    <NavLink className='header__nav-item' to='/home'><h3 className={`header__nav-text ${(path==='/' || path==='/home') && ' header__nav-text--active'}`}>Home</h3></NavLink>
                    <NavLink className='header__nav-item' to='/findmycity'><h3 className={`header__nav-text ${path==='/findmycity' && ' header__nav-text--active'}`}>Find My City</h3></NavLink>
                    <NavLink className='header__nav-item' to='/recommendations'><h3 className={`header__nav-text ${path==='/recommendations' && ' header__nav-text--active'}`}>My Recommendations</h3></NavLink>
                    <NavLink className='header__nav-item' to='/info'><h3 className={`header__nav-text ${path==='/info' && ' header__nav-text--active'}`}>City Info</h3></NavLink>
                </div>  
            </div>
        </header>
    )
}
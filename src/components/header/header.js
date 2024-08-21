import { useRef } from "react";
import arrow from "../../assets/arrow.svg";
import './header.css'

export default function Header() {
	const navRef = useRef();

	const showNavMenu = () => {
		navRef.current.classList.toggle('responsive-nav');
	}

    return <>
        <header ref={navRef}>

			<div className="section-o">
				<div className='logo-container'>
					<svg role="img" aria-label="Logo Ableton" className="logo" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 21"><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg>
				</div>
				<button onClick={showNavMenu} className="menu-button">Menu<span className="menu-arrow-container"><img src={arrow} alt="arrow" className="menu-arrow"/></span></button>
			</div>

			
			<nav  id="primary-nav">
				<div className='section-a'>
					<ul>
						<li><a href="/#" className='Live'>Live</a></li>
						<li><a href="/#" className='Push'>Push</a></li>
						<li><a href="/#" className='Note'>Note</a></li>
						<li><a href="/#" className='Link'>Link</a></li>
						<li><a href="/#" className='Shop'>Shop</a></li>
						<li><a href="/#" className='Packs'>Packs</a></li>
						<li><a href="/#" className='Help'>Help</a></li>
						<li><a href="/#" className='More'>More +</a></li>
					</ul>
				</div>

				<div className='section-b'>
					<ul>
						<li><a href="/#"  className='FreeTrial'>Try Live 12 for free</a></li>
						<li><a href="/#"  className='Login'>Log in or register</a></li>
					</ul>
				</div>				
			</nav>
        </header>

    </>

}
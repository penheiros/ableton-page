import './footer.css';
import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Youtube from '../../assets/youtube.svg';
import Instagram from '../../assets/instagram.svg';
import Tiktok from '../../assets/tiktok.svg';

export default function Footer() {

    return <>
        <footer>
            <div className='container'>

                <div className='column-container'>                
                    <h2 className='footer-title'>Ableton</h2>

                    <div className='column-1 column'>
                        <div className='row-1 r'>
                            <ul>
                                <li><a>Register Live or Push &#x203A;</a></li>
                                <li><a>About Ableton &#x203A;</a></li>
                                <li><a>Jobs &#x203A;</a></li>
                                <div className='social-icons'>
                                    <img src={Facebook} className='facebook social'></img>
                                    <img src={Twitter} className='twitter social'></img>
                                    <img src={Youtube} className='youtube social'></img>
                                    <img src={Instagram} className='instagram social'></img>
                                    <img src={Tiktok} className='tiktok social'></img>
                                </div>
                            </ul>
                        </div>
                        <div className='row-2 r'>
                            <ul>
                                <li className='heading'>Education</li>
                                <li><a>Offers for students and teachers &#x203A;</a></li>
                                <li><a>Ableton for the Classroom &#x203A;</a></li>
                                <li><a>Ableton for Colleges and Universities &#x203A;</a></li>
                            </ul>
                        </div>
                        <div className='row-3 r'>
                            <ul>
                                <li className='heading'>Sign up to our newsletter</li>
                                <li>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</li>
                                <li> <input type="text" placeholder="Email Address" /> <button>Sign Up</button> </li>
                            </ul>
                        </div>
                    </div>

                    <div className='column-2 column'>
                        <div className='row-1 r'>
                            <ul>
                                <li className='heading'>Community</li>
                                <li><a>Find Ableton User Groups &#x203A;</a></li>
                                <li><a>Find Certified Training &#x203A;</a></li>
                                <li><a>Become a Certified Trainer &#x203A;</a></li>
                            </ul>
                        </div>
                        <div className='row-2 r'>
                            <ul>
                                <li className='heading'>Language and Location</li>
                                <div className='dropdown-container'>
                                    <select className='languages dropdown'>
                                        <option>English</option>
                                        <option>Deutsch</option>
                                        <option>Français</option>
                                        <option>日本語</option>
                                        <option>简体中文</option>
                                        <option>Español</option>
                                    </select>
                                    <select className='location dropdown'>
                                        <option>Bangladesh</option>
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>United Kingdom</option>
                                    </select>
                                </div>
                            </ul>
                        </div>
                    </div>
                    
                    <div className='column-3 column'>
                        <div className='bottom-footer'>
                            <ul>
                                <li><a>Contact Us</a></li>
                                <li><a>Press Resources</a></li>
                                <li><a>Legal Info</a></li>
                                <li><a>Privacy Policy</a></li>
                                <li><a>Cookie Settings</a></li>
                                <li><a>Imprint</a></li>
                            </ul>
                            <ul className='credit'>
                                <li>Made in Berlin</li>
                                <div className='logo-container'>
					                <svg role="img" aria-label="Logo Ableton" className="logo" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 21"><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg>
				                </div>
                            </ul>
                        </div>     
                    </div>
                </div>

            </div>
        </footer>
    </>
}
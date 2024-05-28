import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <div>
            <div className='header-div'>
                <div className='logo-div'>
                    <FontAwesomeIcon icon={faBars} className='menubar-icon' />
                    <img src="../images/youtube.jpg" alt="Youtube Logo" className='logo' />
                </div>
                <div className='second-div'>
                    <div className='search-div'>
                        <input type="text" className='search' placeholder='Search' />
                        <button className='search-icon' >
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='s-icon' />
                        </button>
                    </div>
                    <FontAwesomeIcon icon={faMicrophone} className='record-icon' />
                </div>
                <div className='third-div'>
                    <FontAwesomeIcon icon={faVideo} className='video-icon' />
                    <FontAwesomeIcon icon={faBell} className='bell-icon' />
                    <p className='account'>S</p>
                </div>
            </div>
        </div>
    )
}
export default Header;
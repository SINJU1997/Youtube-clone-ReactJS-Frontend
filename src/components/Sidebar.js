import './Sidebar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faClock, faThumbsUp, faFire, faBagShopping, faMusic, faClapperboard, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='border-div'>
                <div className='div1'>
                    <div className='icons-div1'>
                        <FontAwesomeIcon icon={faHouse} className='icon' />
                        <p className='icons-text'>Home</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='icons-div2'>
                        <FontAwesomeIcon icon={faYoutube} className='icon' />
                        <p className='icons-text'>Subscriptions</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='icons-div3'>
                        <FontAwesomeIcon icon={faUser} className='icon' />
                        <p className='icons-text'>Your Channel</p>
                    </div>
                </div>
            </div>
            <div className='border-div'>
                <div className='div2'>
                    <div className='icons-div4'>
                        <FontAwesomeIcon icon={faClock} className='icon' />
                        <p className='icons-text'>Watch Later</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='icons-div5'>
                        <FontAwesomeIcon icon={faThumbsUp} className='icon' />
                        <p className='icons-text'>Liked Videos</p>
                    </div>
                </div>
            </div>


            {/* subscriptions */}


            <div className='subscriptions border-div'>
                <div className='subscription-div'>
                    <p>Subscriptions</p>
                </div>
                <div className='div2'>
                    <div className='channels-div1'>
                        <img src="../images/channel1.jpg" alt="SciShow" className='channels' />
                        <p className='icons-text'>SciShow</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='channels-div2'>
                        <img src="../images/channel2.jpg" alt="SciShow" className='channels' />
                        <p className='icons-text wd'>webdesign Dubai</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='channels-div3'>
                        <img src="../images/channel3.jpg" alt="SciShow" className='channels' />
                        <p className='icons-text'>Patrick Loeber</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='channels-div1'>
                        <img src="../images/channel4.jpg" alt="SciShow" className='channels' />
                        <p className='icons-text'>Firebase</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='channels-div5'>
                        <img src="../images/channel5.jpg" alt="SciShow" className='channels' />
                        <p className='icons-text'>La Table Events</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='channels-div6'>
                        <img src="../images/channel6.jpg" alt="SciShow" className='channels' />
                        <p className='icons-text'>ShopifyDevs</p>
                    </div>
                </div>
            </div>

            {/* explore */}

            <div className='subscriptions'>
                <div className='subscription-div'>
                    <p>Explore</p>
                </div>
                <div className='div2'>
                    <div className='explore-div1'>
                        <FontAwesomeIcon icon={faFire} className='explore-icon' />
                        <p className='icons-text'>Trending</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='explore-div2'>
                        <FontAwesomeIcon icon={faBagShopping} className='explore-icon' />
                        <p className='icons-text'>Shopping</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='explore-div3'>
                        <FontAwesomeIcon icon={faMusic} className='explore-icon' />
                        <p className='icons-text'>Music</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='explore-div4'>
                        <FontAwesomeIcon icon={faClapperboard} className='explore-icon' />
                        <p className='icons-text'>Films</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='explore-div5'>
                        <FontAwesomeIcon icon={faWifi} className='explore-icon' />
                        <p className='icons-text'>Live</p>
                    </div>
                </div>
                <div className='div2'>
                    <div className='explore-div6'>
                        <FontAwesomeIcon icon={faGamepad} className='explore-icon' />
                        <p className='icons-text'>Gaming</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Sidebar
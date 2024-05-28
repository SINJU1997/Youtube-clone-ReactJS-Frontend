import React, { useRef } from 'react';
import './Navigation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';


function Navigation() {
    const scrollRef = useRef(null);
    // const [isScrollingEnabled, setIsScrollingEnabled] = useState(true); // Commented out to resolve the warning

    const handleScroll = (direction) => {
        const scrollAmount = 300;
        if (scrollRef.current) {
            const container = scrollRef.current;
            if (direction === 'left') {
                container.scrollLeft -= scrollAmount;
                console.log("Left");
            } else if (direction === 'right') {
                container.scrollLeft += scrollAmount;
                console.log("right");
            }
        }
    };

    return (
        <div className='list-div'>
            <div>
                <button className='left-btn' onClick={() => handleScroll('left')}>
                    <FontAwesomeIcon icon={faLessThan} />
                </button>
                <div className={`sub-div`} ref={scrollRef}>
                    <p className='all'>All</p>
                    <p className='mixes'>Mixes</p>
                    <p className='music'>Music</p>
                    <p className='live'>Live</p>
                    <p className='tamil'>Tamil Cinema</p>
                    <p className='cp'>Computer programming</p>
                    <p className='gaming'>Gaming</p>
                    <p className='dramedy'>Dramedy</p>
                    <p className='ai'>AI</p>
                    <p className='universe'>Universe</p>
                    <p className='sales'>Sales</p>
                    <p className='upload'>Recently Uploaded</p>
                    <p className='watched'>Watched</p>
                    <p className='new'>New to you</p>
                    <p className='upload'>Python</p>
                    <p className='watched'>Javascript</p>
                    <p className='new'>Filmi</p>
                </div>
                <button className='right-btn' onClick={() => handleScroll('right')}>
                    <FontAwesomeIcon icon={faGreaterThan} />
                </button>
            </div>
        </div>
    );
}

export default Navigation;

import './feedback.scss';
import { FaStar } from 'react-icons/fa'
import { useState } from 'react';

// import { MapContainer } from './googleMaps/GoogleMaps';

const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9'
}

function Feedback() {

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleClick = value => {
        setCurrentValue(value);
    }

    const handleMouseOver = value => {
        setHoverValue(value);
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    }



    return (
        <div className='feedback'>
            <div className='contact'>
                <div className="data-collaction">
                    <div className="rating">
                        <h3>Rate your experience for service</h3>
                        <div >
                            {stars.map((_, index) => {
                                return (
                                    <FaStar 
                                        key={index}
                                        size={24}
                                        style={{
                                            marginRight: 10,
                                            cursor: 'pointer'
                                        }}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                        onClick={() => handleClick(index +1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="questions">
                        <h3>Anything that can be inproved</h3>
                        <textarea placeholder='Yous sugestion...'/>
                        <button>Send</button>
                    </div>
                    <div className="opinions">
                        <h3>Your opinion about us</h3>
                        <textarea placeholder='Your opinion...'/>
                        <button>Send</button>
                    </div>
                </div>
                <div className='infoWrapper'>
                    <div className='contact-us'>
                        <h1>Contact Us</h1>
                        <p>Email: ata@ata.com</p>
                        <p>Phone: ( +374 ) 10 - 010 - 010</p>
                        <street>Street: Baghramyan, 26</street>
                    </div>
                    <div className="user-opinions">
                        <h3>Opinions of users</h3>
                        <div className='user-opinions-field'></div>
                    </div>
                </div>
            </div>
            <div className='googleMap'>GOOGLE MAP</div>
        </div>
    );
}

export default Feedback;
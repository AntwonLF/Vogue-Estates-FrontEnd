import React, { useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router';
import AgentModal from '../../components/AgentModal/AgentModal'; 

import './Listing.css';

const Listing = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
    };

    const images = [
        'https://cdn.newswire.com/files/x/a6/27/041e83ae2346dd39fa550a676446.jpg',
        'https://i.imgur.com/p1PL8og.png',
        'https://i.imgur.com/lZhEA2J.png',
        'https://i.imgur.com/CFwIs9G.png',
        'https://i.imgur.com/xxNguJn.png',
    ];

    const handleImageClick = (imgUrl, id) => {
        navigate(`/listingdetails/${id}`, { state: { imgUrl } });
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <div className="carousel-container">
            <h2>Image Carousel</h2>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} onClick={() => handleImageClick(img)}>
                        <img src={img} alt={`Slide ${index}`} className="carousel-image" />
                    </div>
                ))}
            </Slider>
            <button className="toggle-modal-btn" onClick={toggleModal} style={{ position: 'absolute', bottom: 20, right: 20 }}>Toggle Agent Modal</button>
            {isModalVisible && <AgentModal onClose={toggleModal} />}
        </div>
    );
};

export default Listing;
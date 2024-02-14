import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router';

import './Listing.css'; 

const Listing = () => {
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
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
    ];

    const handleImageClick = (imgUrl)   => {
        navigate('/listingdetails', { state: { imgUrl } });
    };

    return (
        <div className="carousel-container">
            <h2> Image Carousel </h2>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} onClick={() => handleImageClick(img)}>
                        <img src={img} alt={`Slide ${index}`} className="carousel-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Listing;

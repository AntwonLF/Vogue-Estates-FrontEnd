import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router';
import getListingDetails from '../../services/listingService';


import './Listing.css'; 

const Listing = () => {
    const navigate = useNavigate();
    console.log(getListingDetails, "testing")

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

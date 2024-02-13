import React from 'react';
import Slider from 'react-slick';


import './listing.css'; 

const Listing = () => {
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
    return (
        <div className="carousel-container">
            <h2> Image Carousel </h2>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Slide ${index}`} className="carousel-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Listing;

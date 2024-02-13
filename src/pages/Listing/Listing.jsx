import React from 'react';
import Slider from 'react-slick';

const Listing = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 3, 
        slideToScroll: 1,
        centerMode: true,
    }
    const images = [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
    ];
    return (
        <div>
            <h2> Image Carousel </h2>
            <Slider {...settings}>
                {images.map((img, index) =>(
                <div key={index}>
                   <img src={img} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
                </div>
                ))}
            </Slider>
        </div>
    );
};



export default Listing
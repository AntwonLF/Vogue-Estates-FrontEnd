import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router';
import AgentModal from '../../components/AgentModal/AgentModal';
import { getAllListings } from '../../services/listingService'; // Adjust the import path as necessary

import './Listing.css';

const Listing = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [images, setImages] = useState([]); // State to store listing images
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
    };

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await getAllListings();
                console.log(response);
                const listingImages = response.data.map(listing => {
                    return listing.images[0] ? listing.images[0].image : null;
                }).filter(url => url !== null);
                setImages(listingImages);
                console.log(listingImages);
            } catch (error) {
                console.error('Failed to fetch listings:', error);
            }
        };
        fetchListings();
    }, []);


    const handleImageClick = (imgUrl, id) => {
        navigate(`listing/${id}`, { state: { imgUrl } });
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <div className="carousel-container">
            <h2>Image Carousel</h2>
            <Slider {...settings}>
                {images.map((imgUrl, index) => (
                    imgUrl ? (
                        <div key={index} onClick={() => handleImageClick(imgUrl, index)}> {/* Consider using a proper ID instead of index if available */}
                            <img src={imgUrl} alt={`Slide ${index}`} className="carousel-image" />
                        </div>
                    ) : null 
                ))}
            </Slider>

            <button className="toggle-modal-btn" onClick={toggleModal} style={{ position: 'absolute', bottom: 20, right: 20 }}>Toggle Agent Modal</button>
            {isModalVisible && <AgentModal onClose={toggleModal} />}
        </div>
    );
};

export default Listing;

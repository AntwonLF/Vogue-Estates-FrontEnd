
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router';
import AgentModal from '../../components/AgentModal/AgentModal';
import { getAllListings } from '../../services/listingService'; 

import './Listing.css';

const Listing = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [listings, setListings] = useState([]); 
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
                setListings(response.data);
            } catch (error) {
                console.error('Failed to fetch listings:', error);
            }
        };
        fetchListings();
    }, []);


    const handleImageClick = (listing) => {
        navigate(`/listing/${listing.id}`, { state: { listing } });
    };
    

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <div className="carousel-container">
            <h2>Image Carousel</h2>
            <Slider {...settings}>
                {listings.map((listing, index) => (
                    listing.images[0] ? (
                        <div key={index} onClick={() => handleImageClick(listing)} className="carousel-slide">
                            <img src={listing.images[0].image} alt={`Slide ${index}`} className="carousel-image" />
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

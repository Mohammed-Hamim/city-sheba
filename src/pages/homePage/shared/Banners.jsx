import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Banner1 from './banner/Banner1';
import Banner2 from './banner/Banner2';
import Banner3 from './banner/Banner3';

const Banners = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
        >
            <div className='rounded-sm'>
                <Banner1></Banner1>
            </div>

            <div className='rounded-sm'>
                <Banner2></Banner2>
            </div>
            <div>
                <Banner3></Banner3>
            </div>
        </Carousel>
    );
};

export default Banners;
import React from 'react';
import drill from '../../assets/images/Drill.png';
import cover from '../../assets/images/cover.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full d-flex justify-center items-center">
                <img src={drill} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="carousel-caption md:block absolute text-center text-white sm:w-1/2 lg:w-4/5">
                    <h5 className="text-3xl font-semibold lg:text-6xl lg:font-bold text-cyan-400">Wide range of tools collections</h5>
                    <p className='lg:text-xl'>We are dedicated to manufacturing high quality hand tools ranging from Manual tools,Machine tools accessories from brushware tools etc.</p>
                    <button className='btn btn-primary text-white mt-2'>See More</button>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full d-flex justify-center items-center">
                <img src={cover} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="carousel-caption md:block absolute text-center text-white w-4/5">
                    <h5 className="text-3xl font-semibold lg:text-6xl lg:font-bold text-cyan-400">Wide range of tools collections</h5>
                    <p className='lg;text-xl'>We are dedicated to manufacturing high quality hand tools ranging from Manual tools,Machine tools accessories from brushware tools etc.</p>
                    <button className='btn btn-primary text-white'>See More</button>
                </div>
            </div>
        </div>


    );
};

export default Banner;
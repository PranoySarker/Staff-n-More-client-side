import React from 'react';
import pliers from '../../assets/images/pliers.jpg';
import drill from '../../assets/images/Drill.jpg';

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
                    <h5 className="text-3xl font-bold">Wide range of tools collections</h5>
                    <p className=''>We are dedicated to manufacturing high quality hand tools ranging from Manual tools,Machine tools accessories from brushware tools etc.</p>
                    <button className='btn btn-primary text-white mt-2'>See More</button>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full d-flex justify-center items-center">
                <img src={pliers} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="carousel-caption md:block absolute text-center text-white w-4/5">
                    <h5 className="text-3xl font-bold">Wide range of tools collections</h5>
                    <p className=''>We are dedicated to manufacturing high quality hand tools ranging from Manual tools,Machine tools accessories from brushware tools etc.</p>
                    <button className='btn btn-primary text-white'>See More</button>
                </div>
            </div>
        </div>

        // <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content flex-col lg:flex-row">
        //         <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
        //         <div>
        //             <h1 className="text-5xl font-bold">Box Office News!</h1>
        //             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;
import React from 'react';
import explore from '../../assets/images/explore.jpg';

const Explore = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={explore} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mx-10'>
                        <h1 className="text-5xl font-bold">
                            <span className='text-yellow-400'>Explore Oure Latest Pricelist!</span> & <span className='text-purple-600'>Catalogue</span></h1>
                        <button className="btn btn-primary mt-3">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
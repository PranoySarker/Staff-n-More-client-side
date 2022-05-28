import React from 'react';
import { FaBoxOpen, FaCalendar, FaGlobe, FaHandshake } from "react-icons/fa";

const Summary = () => {
    return (
        <>

            <div className='px-12 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='border rounded-lg text-center bg-base-200 flex flex-wrap '>
                    <h2 className='text-5xl lg:ml-28'><FaBoxOpen /></h2>
                    <h2 className='text-3xl font-bold'>1500 Product range</h2>
                </div>
                <div className='border rounded-lg text-center bg-base-200 flex flex-wrap'>
                    <h2 className='text-5xl lg:ml-28'><FaCalendar /></h2>
                    <h2 className='text-3xl font-bold'>55 Years Experience</h2>
                </div>
                <div className='border rounded-lg  text-center bg-base-200 flex flex-wrap'>
                    <h2 className='text-5xl lg:ml-28'><FaGlobe /></h2>
                    <h2 className='text-3xl font-bold ml-12'>45 Countries</h2>
                </div>
                <div className='border rounded-lg  text-center bg-base-200 flex flex-wrap'>
                    <h2 className='text-5xl lg:ml-28'><FaHandshake /></h2>
                    <h2 className='text-3xl font-bold ml-3'>5000 Happy Client</h2>
                </div>
            </div>
        </>
    );
};

export default Summary;
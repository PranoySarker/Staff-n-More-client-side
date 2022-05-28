import React from 'react';

const Stay = () => {
    return (
        <div className='bg-slate-200 text-white w-full py-12 my-16'>
            <div className='w-96 mx-auto'>
                <h2 className='text-center text-4xl text-blue-700 font-bold mb-5'>STAY WITH US</h2>
                <h2 className='text-center text-2xl text-success font-bold'>To never miss OFFERS & UPDATES</h2>

                <div className='flex mt-5'>
                    <input type="email" placeholder='Email here' class="input input-bordered w-full max-w-xs mb-3" />
                    <button className='btn btn-success mx-2'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Stay;
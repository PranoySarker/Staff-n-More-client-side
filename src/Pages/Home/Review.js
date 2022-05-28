import React from 'react';

const Review = () => {
    return (
        <div className='mb-3'>
            <h2 className='text-center text-4xl font-bold mb-10'> Review of Products</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 '>
                <div class="card w-96 bg-indigo-700 text-primary-content mx-10 shadow-lg my-3">
                    <div class="card-body text-white">
                        <h2 class="card-title">Diagonal Plier</h2>
                        <p>Average Review of the Product: <span className='text-2xl font-bold text-warning'> 4/5</span> </p>

                    </div>
                </div>
                <div class="card w-96 bg-indigo-700 text-primary-content mx-10 shadow-lg my-3">
                    <div class="card-body text-white">
                        <h2 class="card-title">Hand Saw</h2>
                        <p>Average Review of the Product: <span className='text-2xl font-bold text-warning'> 3.5/5</span> </p>

                    </div>
                </div>
                <div class="card w-96 bg-indigo-700 text-primary-content mx-10 shadow-lg my-3">
                    <div class="card-body text-white">
                        <h2 class="card-title">Drill Machine</h2>
                        <p>Average Review of the Product: <span className='text-2xl font-bold text-warning'> 5/5</span> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
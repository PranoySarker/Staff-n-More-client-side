import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const PurchaseTool = () => {
    const { id } = useParams()
    const [tool, setTool] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])

    return (
        <div className='my-10'>
            <div className='w-3/5 mx-auto'>

                <div class="card w-full bg-base-100 shadow-xl image-full mb-8">
                    <figure><img src={tool.picture} alt={tool.name} style={{ height: '300px' }} /></figure>
                    <div class="card-body">
                        <h2 class="text-3xl font-bold text-white text-center">Product Name: {tool.name}</h2>
                        <h2 class="text-3xl font-bold text-white text-center">Price: {tool.price}</h2>
                        <h2 class="text-3xl font-bold text-white text-center">Available Quantity: {tool.availableQuantity}</h2>
                        <h2 class="text-3xl font-bold text-white text-center">Minimum Order Quantity: {tool.minimumOrder}</h2>
                        <p>Product Description:{tool.description}</p>

                    </div>
                </div>

                <div class="card w-full bg-base-300 shadow-xl mb-5">
                    <div class="card-body">
                        <form action="" className='mx-auto w-1/2'>
                            <input type="text" value={user?.displayName} class="input input-bordered input-info w-full max-w-xs text-xl mb-3" />

                            <input type="text" value={user.email} disabled class="input input-bordered input-info w-full max-w-xs text-xl mb-3" />

                            <input type="text" placeholder="Your Phone Number " class="input input-bordered input-info w-full max-w-xs text-xl mb-3" />

                            <input type="text" placeholder="Your Address" class="input input-bordered input-info w-full max-w-xs text-xl mb-3" />

                            <label className='label'>
                                <span class="label-text">Place Your Order Here</span>
                            </label>
                            <input type="number" class="input input-bordered input-info w-full max-w-xs text-xl mb-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseTool;
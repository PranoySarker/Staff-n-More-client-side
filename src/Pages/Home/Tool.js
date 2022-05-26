import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool, setStaff }) => {
    const { name, picture, description, availableQuantity, minimumOrder, price, _id } = tool;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-2xl">
                <figure class="px-10 pt-10">
                    <img src={picture} alt={name} class="rounded-xl" style={{ width: '250px', height: '250px' }} />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>Price:{price}</p>
                    <p>Available Quantity:{availableQuantity}</p>
                    <p>Minimum Order:{minimumOrder}</p>
                    <p>{description.slice(0, 80) + '...'}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">
                            <Link to={`/tools/${_id}`}>Purchase</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Tool;
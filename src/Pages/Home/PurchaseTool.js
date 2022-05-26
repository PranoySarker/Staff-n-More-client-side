import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const PurchaseTool = () => {
    const { id } = useParams()
    const [tool, setTool] = useState({});
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onChange" });


    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])


    const onSubmit = (data, event) => {
        console.log(data);

        const order = {
            productId: id,
            productName: tool.name,
            pricePerProduct: tool.price,
            orderQuantity: event.target.order.value,
            userName: user.email,
            phoneNumber: event.target.phone.value,
            Address: event.target.address.value
        }
        console.log(order);
    };

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
                    <div class="card-body mx-auto w-3/5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs mb-3">

                                <input type="text"
                                    placeholder="Name"
                                    value={user?.displayName}
                                    name='name'
                                    disabled
                                    className="input input-bordered w-full max-w-xs bg-base-100"
                                    readOnly />
                            </div>

                            <div className="form-control w-full max-w-xs mb-3">

                                <input type="email"
                                    placeholder="Email"
                                    value={user?.email}
                                    name='email'
                                    disabled
                                    className="input input-bordered w-full max-w-xs bg-base-100"
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">

                                <input type="text"
                                    placeholder="Phone Number"
                                    name='phone'
                                    className="input input-bordered w-full max-w-xs bg-base-100"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'phone is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.phone.message}</span>}
                                </label>

                            </div>

                            <div className="form-control w-full max-w-xs">

                                <input type="text"
                                    placeholder="Address"
                                    name='address'
                                    className="input input-bordered w-full max-w-xs bg-base-100"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.address.message}</span>}

                                </label>

                            </div>
                            <div className="form-control w-full max-w-xs mb-3">
                                <input type="text"
                                    value={tool.name}
                                    name='toolName'
                                    disabled
                                    className="input input-bordered w-full max-w-xs bg-base-100"
                                />
                            </div>

                            <div className="form-control w-full max-w-xs ">

                                <input type="text"
                                    placeholder="Order Quantity"
                                    name='order'
                                    // value={tool.minimumOrder}
                                    className="input input-bordered w-full max-w-xs bg-base-100"
                                    {...register("order", {
                                        required: {
                                            value: true,
                                            message: 'please fill order'
                                        },
                                        min: {
                                            value: `${tool.minimumOrder}`,
                                            message: 'Order must be more than Minimum order quantity'
                                        },
                                        max: {
                                            value: `${tool.availableQuantity}`,
                                            message: 'Order must not more than Available quantity'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.order?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.order.message}</span>}
                                    {errors.order?.type === 'min' && <span className='label-text-alt text-red-500'>{errors.order.message}</span>}
                                    {errors.order?.type === 'max' && <span className='label-text-alt text-red-500'>{errors.order.message}</span>}
                                </label>

                            </div>
                            <input className='btn w-full max-w-xs text-lg' type="submit" value='Place Order' disabled={errors.order?.type === 'min' || errors.order?.type === 'max'} />


                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseTool;
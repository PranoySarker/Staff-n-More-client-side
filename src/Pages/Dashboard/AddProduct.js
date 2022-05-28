import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'e1f25d1fe7ab7ba257f8d8004b26cc02';

    const onSubmit = data => {
        // console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        name: data.name,
                        price: data.price,
                        availableQuantity: data.quantity,
                        minimumOrder: data.order,
                        description: data.description,
                        picture: img
                    }
                    fetch('https://lit-eyrie-61212.herokuapp.com/tool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast('Succefully added product');
                                reset();
                            }
                            else {
                                toast.error('Failed to add product');
                            }
                        })
                }
                console.log('imgbb', result);
            })
    }
    return (
        <div className='my-3'>
            <h2 className='text-2xl my-2'>Add a Product</h2>
            <div class="card w-96 bg-base-300 shadow-xl mb-5">
                <div class="card-body ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full mb-3">

                            <input type="text"
                                placeholder="Product Name"
                                name='name'
                                className="input input-bordered w-full bg-base-100"
                                autoComplete='off'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        required: 'error message'
                                    }
                                })}
                            />

                        </div>

                        <div className="form-control w-full max-w-xs mb-3">

                            <input type="text"
                                placeholder="Product Price"
                                name='email'
                                className="input input-bordered w-full max-w-xs bg-base-100"
                                autoComplete='off'
                                {...register("price", {
                                    required: 'error message'
                                })}
                            />
                        </div>


                        <div className="form-control w-full max-w-xs mb-3">

                            <input type="text"
                                placeholder="Available Quantity"
                                name='email'
                                className="input input-bordered w-full max-w-xs bg-base-100"
                                autoComplete='off'
                                {...register("quantity", {
                                    required: 'error message'
                                })}
                            />
                        </div>


                        <div className="form-control w-full max-w-xs mb-3">

                            <input type="text"
                                placeholder="Minimum Order Quantity "
                                name='minimumOrder'
                                className="input input-bordered w-full max-w-xs bg-base-100"
                                autoComplete='off'
                                {...register("order", {
                                    required: 'error message'
                                })}
                            />
                        </div>

                        <div className="form-control w-full max-w-xs mb-3">

                            <input type="file"
                                placeholder="Product image"
                                name='image'
                                className="input input-bordered w-full max-w-xs bg-base-100"
                                {...register("image", {
                                    required: 'error message'
                                })}
                            />
                        </div>


                        <div className="form-control w-full max-w-xs mb-3">

                            <textarea type="text-area"
                                placeholder="Product description"
                                name='description'
                                className="input input-bordered w-full max-w-xs bg-base-100"
                                {...register("description", {
                                    required: 'error message'
                                })}
                            />
                        </div>

                        <input className='btn w-full max-w-xs text-lg' type="submit" value='Add Product' />


                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://lit-eyrie-61212.herokuapp.com/tools').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-4/5'>
            <h2 className='text-2xl my-2'>Total Products:{tools.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Minimum Order quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map(tool => <ProductRow
                                key={tool._id}
                                tool={tool}
                                refetch={refetch}
                                setDeleteProduct={setDeleteProduct}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteProduct && <DeleteConfirmModal
                deleteProduct={deleteProduct}
                setDeleteProduct={setDeleteProduct}
                refetch={refetch}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageProducts;
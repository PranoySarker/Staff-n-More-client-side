import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteProduct, setDeleteProduct, refetch }) => {
    const { name, _id } = deleteProduct;

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/tool/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success('Successfully deleted product');
                    setDeleteProduct(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-warning">Are you sure to delete {name}</h3>
                    <p class="py-4">If you delete product data .It will remove from every where permanently</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Delete</button>
                        <label for="my-modal-6" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default DeleteConfirmModal;
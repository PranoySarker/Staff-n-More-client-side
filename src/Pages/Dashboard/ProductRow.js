import React from 'react';


const ProductRow = ({ tool, setDeleteProduct }) => {
    const { name, price, availableQuantity, minimumOrder } = tool;

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td>{minimumOrder}</td>
            <td>
                <label onClick={setDeleteProduct(tool)} for="my-modal-6" class="btn btn-xs btn-error">Delete</label>

            </td>
        </tr>
    );
};

export default ProductRow;
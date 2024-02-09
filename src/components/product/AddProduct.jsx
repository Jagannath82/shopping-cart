import { useState } from "react";
import { useQueryClient, useMutation } from 'react-query';
import { createProducts } from "../../client/ProductClient";

export default function AddProduct() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const client = useQueryClient();

    const { isSuccess, mutate } = useMutation(createProducts);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs));
        mutate(inputs);
    }

    if(isSuccess){
        client.invalidateQueries(['products'])
    }

    return (<>
        <div class="container-fluid">
            <form onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col-sm-3 col-md-6">
                        <label for="usr">Product ID:</label>
                        <input type="text" class="form-control" name="id" onChange={handleChange} />
                    </div>
                    <div class="col-sm-3 col-md-6">
                        <label for="usr">Product Name:</label>
                        <input type="text" class="form-control" name="productName" onChange={handleChange} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 col-md-6">
                        <label for="usr">Image Name:</label>
                        <input type="text" class="form-control" name="imageUrl" onChange={handleChange} />
                    </div>
                    <div class="col-sm-3 col-md-6">
                        <label for="usr">Price:</label>
                        <input type="text" class="form-control" name="price" onChange={handleChange} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 col-md-6">
                        <label for="usr">Category:</label>
                        <input type="text" class="form-control" name="category" onChange={handleChange} />
                    </div>
                </div>
                <div class="row .p-3">
                    <div class="col-sm-3 col-md-6">
                        <button class="btn btn-primary" onClick={handleSubmit}>Add Product</button>
                    </div>
                </div>

            </form>
        </div>
    </>);
}
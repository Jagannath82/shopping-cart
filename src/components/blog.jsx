import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-quartz.css';
import { useLoaderData } from 'react-router-dom'

const columnDefs = [{'field':'userId'}, {'field':'id'}, {'field':'title'}, {'field':'body'}];
export default function Blog() {
    const posts = useLoaderData();
    console.log(posts);
    return (<div className="ag-theme-quartz"
        style={{
            height: '500px',
            width: '100%'
        }}><AgGridReact
            columnDefs={columnDefs}
            rowData={posts}>
        </AgGridReact>
    </div>);
}

export async function loadPost() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    return response.data;
}
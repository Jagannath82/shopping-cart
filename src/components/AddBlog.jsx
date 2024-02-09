import React from 'react'

import {Form, redirect} from 'react-router-dom'

export async function action({request}){
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    return redirect("/addPost");
}

export default function AddBlog() {
  return (
    <div class="container-fluid w-70">
            <Form method="post">
                <div class="row">
                    <div class="col-sm-3 col-md-6">
                        <label for="usr">User ID:</label>
                        <input type="text" class="form-control" name="userId" id="userId" placeholder="Post User Id"/>
                    </div>
                    <div class="col-sm-3 col-md-6">
                        <label for="usr">Title:</label>
                        <input type="text" class="form-control" name="title" id="title" placeholder="Post title"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-12">
                        <label for="usr">Body:</label>
                        <textarea class="form-control" name="body" id="body" placeholder="Post content"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-12 mx-auto">
                        <button class="btn btn-primary m-3" type="submit">Add Post</button>
                    </div>
                </div>

            </Form>
        </div>
  )
}

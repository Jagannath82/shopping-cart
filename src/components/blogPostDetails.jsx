import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

export default function BlogPostDetails() {
  const blogPost = useLoaderData();
  return (
    <div>
      {blogPost?.body}
    </div>
  )
}

export async function loadBlogPostDetails({params}){
    const postDetails =  await axios.get(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
    return postDetails.data;
}

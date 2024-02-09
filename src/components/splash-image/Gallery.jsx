import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './SplashContext'
import { useQuery } from 'react-query';
import axios from 'axios';
import ImageGallery from "react-image-gallery";



const url = 'https://api.unsplash.com/search/photos?client_id=keKLknlfPa4F7H1uNtbTfEmt3H16oSolyamyIjqyub4&query=';

const defaultImages = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
export default function Gallery(props) {

  const [images, setImages] = useState(defaultImages)
  const { search } = useContext(GlobalContext);

  const response = useQuery(['unsplashImage', search], async () => {
    const result = await axios.get(`${url}$query=${search}`);
    return result.data;
  })

  useEffect(() => {
    if (response?.data?.results) {
      let newImages = [];
      response?.data?.results?.map((item) => {
        newImages.push({
          original: item?.urls?.full,
          thumbnail: item?.urls?.thumb
        })
      });
      setImages(newImages);
    }
  }, [response?.data?.results])

  if (response.isLoading) {
    return (<section className='image-container'>
      <h4>Loading..</h4>
    </section>)
  }

  if (response.isError || response?.data?.results?.length === 0) {
    return (<section className='image-container'>
      <h4>Error loading images</h4>
    </section>)
  }





  return (
    <div>
      {/* <div className='row'>
        {

          response?.data?.results?.map((item) => {
            const url = item?.urls?.full;
            return (
              <div className="col-sm">
                <img src={url} key={item?.id} alt={item?.alt_description} className='w-30 shadow-1-strong rounded mb-4' />
              </div>)
          })}
      
      </div> */}

      <ImageGallery items={images} />;

    </div>
  )
}

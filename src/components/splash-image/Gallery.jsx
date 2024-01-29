import React, { useContext } from 'react'
import { GlobalContext } from './SplashContext'
import books from './books.json'
import { useQuery } from 'react-query';
import axios from 'axios';

const url = 'https://api.unsplash.com/search/photos?client_id=keKLknlfPa4F7H1uNtbTfEmt3H16oSolyamyIjqyub4&query=';

export default function Gallery(props) {

  const {search} = useContext(GlobalContext);

  const response = useQuery(['unsplashImage', search], async () => {
    const result = await axios.get(`${url}$query=${search}`);
    return result.data;
  })

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
    
      <section className='image-container'>
        <div className='row'>
        {

          response?.data?.results?.map((item) => {
            const url = item?.urls?.regular;
            return (
              <div className="col-sm">
                <img src={url} key={item?.id} alt={item?.alt_description} className='w-30 shadow-1-strong rounded mb-4' />
              </div>)
          })}
      
      </div>
      {/* <h2>
        <div class="container">
          {books.map(book => {
            return (<div class="row border">
              <div class="col-sm border">
                {book.id}
              </div>
              <div class="col-sm border">
                {book.Author}
              </div>
              <div class="col-sm border">
                {book.Name}
              </div>
            </div>);
          })}
        </div>



      </h2> */}
    </section>
  )
}

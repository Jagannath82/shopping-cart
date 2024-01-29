import { useContext } from "react";
import { GlobalContext } from "./SplashContext";

export default function SearchForm(props) {
  const {setSearch} = useContext(GlobalContext);

  const showImages = (e) => {
    e.preventDefault();
    setSearch(e.target.elements.search.value);
  }

  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={showImages}>
        <input type="text" className='search-input' name='search'/>
        <button className='btn btn-primary pl-3'>Search</button>
      </form>
    </section>

  )
}

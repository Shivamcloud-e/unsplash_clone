import React, {useState, useEffect} from 'react';
import {Heading} from './components/Heading';
import {Loader} from './components/Loader';
import {UnsplashImage} from './components/UnsplashImage';
import axios from 'axios';
import styled from'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';


const GlobalStyle= createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: pink;
  }

  body{
    font-family: sans-serif;

  }
  `;

const WrapperImage= styled.section`
  max-width: 70rem;
  grid-gap: 0em;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;

`;

function App() {

  const [images, setImages]= useState([]);

  useEffect(() => {
    fetchImages();
  },[])

  const breakpoints={
    default:6,
    1200:3,
    992:3,
    768:2,
    576:1,
  };
  const fetchImages=()=>{
    const apiRoot = "https://api.unsplash.com";
    const accessKey= process.env.REACT_APP_ACCESSKEY;
    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .then(res => setImages([...images,...res.data]))
  }
  return (
    <div className="App">
      <Heading/>
      <GlobalStyle/>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader/>}
      >
      <Masonry breakpointss={breakpoints} className="masonry-grid" colClassName="masonary-grid_column">


      </Masonry>
      <WrapperImage>
      {images.map(image =>(
        <UnsplashImage url={image.urls.thumb} key={image.id} />
      ))}
      </WrapperImage>
      </InfiniteScroll>
      
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';

interface ImageList {
  imgArr: String[]
}

const List = (imageList: ImageList) => {
    
  console.log(imageList.imgArr)
  const [index, setIndex] = useState(3);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
    }
  function fetchMoreListItems() {
      setTimeout(() => {
          setIndex(index+3);
          setIsFetching(false);
      }, 1000);
    }  
  
  return (
    <>
      <ul className="list-group mb-2">
        {imageList.imgArr.slice(0,index).map(listItem => <ImageCard source={listItem}/>)}
      </ul>
      <br/>
      {isFetching && 'Fetching more list items...'}
    </>
  );
};

export default List;
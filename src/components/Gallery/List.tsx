import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';

interface ImageList {
  imgArr: String[]
}

const List = (imageList: ImageList) => {
  let fetchingAmt = 3;
  const [index, setIndex] = useState(fetchingAmt);
  const [renderedItems, setRenderedItems] = useState<JSX.Element[] | undefined>(undefined);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    console.log("USEEFFECT LIST CALL\n\nlist:  ",imageList);
    let tempArr: JSX.Element[] = [];

    for(let i=0; i<imageList.imgArr.length; i++){

      if(i==fetchingAmt)
        break;
      
      tempArr[i] = <ImageCard source={imageList.imgArr[i].toString()}/>
      console.log(tempArr[i]);
    }

    setRenderedItems(tempArr);
  },[imageList.imgArr])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if(renderedItems)
    console.log(renderedItems[1]);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  }

  function fetchMoreListItems() {
    let tempArr: JSX.Element[] = [];
    let count = 0;
    
    for(let i=0; i<fetchingAmt; i++){
      console.log(i+index);
      console.log(imageList.imgArr[index+i])
      if(!imageList.imgArr[index+i])
        break;

      tempArr[i] = <ImageCard source={imageList.imgArr[index+i].toString()}/>

      count++;
    }
    setRenderedItems(renderedItems?.concat(tempArr));
    setIndex(index+count);
    setIsFetching(false);
    console.log(renderedItems);
  }  
  
  return (
    <>
      <ul className="list-group mb-2">
        {renderedItems}
      </ul>
      <br/>
      {isFetching && 'Fetching more list items...'}
    </>
  );
};

export default List;
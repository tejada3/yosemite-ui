import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';

interface ImageListProps {
  imgArr: String[]
}

const List = (imageList: ImageListProps) => {
  //fetching amount is how many cards are added when fetching more cards
  let fetchingAmt = 3;
  //index is the number of cards on the screen
  const [index, setIndex] = useState(fetchingAmt);
  const [renderedItems, setRenderedItems] = useState<JSX.Element[] | undefined>(undefined);
  const [isFetching, setIsFetching] = useState(false);

  //Listener handles scrolling and loading more elements into list
  useEffect(() => {
    if(index>3){
      console.log("index is greater than 3 on initial load, resetting")
      setIndex(3);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    //Update to the list 
    console.log("USEEFFECT LIST CALL\n\nlist:  ",imageList);
    let tempArr: JSX.Element[] = [];

    for(let i=0; i<imageList.imgArr.length; i++){

      if(i==index)
        break;
      
      tempArr[i] = <ImageCard source={imageList.imgArr[i].toString()}/>
      console.log(tempArr[i]);
    }

    setRenderedItems(tempArr);
  },[imageList.imgArr])

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
      console.log(index+i);
      if(!imageList.imgArr[index+i])
        break;

      tempArr[i] = <ImageCard source={imageList.imgArr[index+i].toString()}/>

      count++;
    }
    const updatedList = renderedItems?.concat(tempArr);
    setRenderedItems(updatedList);
    setIndex(index+count);
    setIsFetching(false);
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
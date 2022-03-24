import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';

interface ImageListProps {
  imgArr: String[],
  index: number
}

const List = (imageList: ImageListProps) => {
  //fetching amount is how many cards are added when fetching more cards
  let fetchingAmt = 3;
  //index is the number of cards on the screen
  const [index, setIndex] = useState(imageList.index);
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

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  }

  useEffect(() => {
    //Update to the list 
    console.log("USEEFFECT LIST CALL\n\nlist:  ",imageList);
    let tempArr: JSX.Element[] = [];

    for(let i=0; i<imageList.imgArr.length; i++){

      if(i==fetchingAmt)
        break;
      
        //Store in local storage for quick reload
        //https://www.bing.com/videos/search?q=react+persist&ru=%2fvideos%2fsearch%3fq%3dreact%2bpersist%26FORM%3dHDRSC4&view=detail&mid=67B6E0CBEFE357D170F767B6E0CBEFE357D170F7&rvsmid=4B2588F54903CE71DD6C4B2588F54903CE71DD6C&FORM=VDQVAP
      tempArr[i] = <ImageCard source={imageList.imgArr[i].toString()}/>
      console.log(tempArr[i]);
    }

    setRenderedItems(tempArr);
  },[imageList.imgArr])

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function fetchMoreListItems() {
    let tempArr: JSX.Element[] = [];
    let count = 0;
    
    for(let i=0; i<fetchingAmt; i++){
      console.log(index+i);
      console.log(imageList.imgArr[index+i])
      if(!imageList.imgArr[index+i])
        break;

      tempArr[i] = <ImageCard source={imageList.imgArr[index+i].toString()}/>

      count++;
    }
    console.log(renderedItems)
    console.log(tempArr);
    const updatedList = renderedItems?.concat(tempArr);
    setRenderedItems(updatedList);
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
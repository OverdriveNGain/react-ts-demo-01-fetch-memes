import React, { type ReactElement, useState } from 'react';
import './App.css';
import Carousel, { type CarouselItem } from './Carousel';

type Meme = Readonly<{
  id: string
  box_count: number
  captions: number
  height: number
  name: string
  url: string
  width: number
}>;

type MemeList = readonly Meme[];

function App (): ReactElement {
  const [memeList, setMemeList] = useState<MemeList>([]);

  const carouselItems: readonly CarouselItem[] = [];

  return (
    <>
      <div>
        <Carousel items={carouselItems} />
      </div>
      <button>Fetch Memes</button>
    </>
  );
}

export default App;

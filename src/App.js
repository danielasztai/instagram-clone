import React, { useState } from 'react';

import OpenedStory from './components/Story/OpenedStory';
import Sidebar from './components/Sidebar/Sidebar';
import Stories from './components/Story/Stories';
import Feed from './components/Feed/Feed';
import classes from './App.module.css';
import Recommended from './components/Recommended/Recommended';
import ImageProvider from './store/ImageProvider';

import ferrariImg from './assets/ferrari_1.webp';
import parisImg from './assets/paris_1.jpeg';
import rioImg from './assets/rio_1.jpeg';
import elephantImg from './assets/elephant_1.jpeg';
import guyImg from './assets/guy_1.jpeg';

import story_1 from './assets/story_1.png';
import story_2 from './assets/story_2.png';
import story_3 from './assets/story_3.png';
import story_4 from './assets/story_4.png';
import story_5 from './assets/story_5.png';
import story_6 from './assets/story_6.png';
import story_7 from './assets/story_7.png';
import story_8 from './assets/story_8.png';

import story_img_1 from './assets/story-img_1.jpeg';
import story_img_2 from './assets/story-img_2.jpeg';
import story_img_3 from './assets/story-img_3.jpeg';
import story_img_4 from './assets/story-img_4.jpeg';
import story_img_5 from './assets/story-img_5.jpeg';
import story_img_6 from './assets/story-img_6.jpeg';
import story_img_7 from './assets/story-img_7.jpeg';
import story_img_8 from './assets/story-img_8.jpeg';

const storyData = [
  { id: '0', img: story_1, user: 'sarah_johnxx', storyImage: story_img_1 },
  { id: '1', img: story_2, user: 'joshua1337', storyImage: story_img_2 },
  { id: '2', img: story_3, user: 'feelTheSunset', storyImage: story_img_3 },
  { id: '3', img: story_4, user: 'adam_theGoat', storyImage: story_img_4 },
  { id: '4', img: story_5, user: 'jessica_brown', storyImage: story_img_5 },
  { id: '5', img: story_6, user: 'alxndra_shine', storyImage: story_img_6 },
  { id: '6', img: story_7, user: 'bobby_banks1', storyImage: story_img_7 },
  { id: '7', img: story_8, user: 'shoot_the_nature', storyImage: story_img_8 },
];

const DUMMY_POSTS = [
  {
    id: 'p1',
    authorName: 'ferrariscuderia',
    img: ferrariImg,
    postedText: '🔝❤️',
    numOfLikes: 245156,
    date: '2023.06.24',
    numOfComments: 15789,
    location: 'Italy',
    profileImg: ferrariImg,
    comments: [],
  },
  {
    id: 'p2',
    authorName: 'steven_18',
    img: guyImg,
    postedText: 'Do you like my new glasses?',
    numOfLikes: 2451,
    date: '2023.06.21',
    numOfComments: 585,
    location: 'Albania',
    profileImg: guyImg,
    comments: [],
  },
  {
    id: 'p3',
    authorName: 'julie111',
    img: elephantImg,
    postedText: 'That was fun 🐘',
    numOfLikes: 114,
    date: '2023.06.30',
    numOfComments: 9,
    location: '',
    profileImg: elephantImg,
    comments: [],
  },
  {
    id: 'p4',
    authorName: 'sugasean',
    img: rioImg,
    postedText: "Let's go 🍭",
    numOfLikes: 1641814,
    date: '2023.06.31',
    numOfComments: 12564,
    location: '',
    profileImg: rioImg,
    comments: [],
  },
  {
    id: 'p5',
    authorName: 'karla23',
    img: parisImg,
    postedText: 'Most beautiful city ❤️',
    numOfLikes: 314,
    date: '2023.06.30',
    numOfComments: 21,
    location: 'Paris',
    profileImg: parisImg,
    comments: [],
  },
];

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState();

  const storyOpenHandler = () => {
    setIsOpened(true);
  };

  const closeStoryHandler = () => {
    setIsOpened(false);
  };

  const currentIndexHandler = data => {
    setCurrentImageIndex(data);
  };

  if (isOpened) {
    return (
      <OpenedStory
        onCloseStory={closeStoryHandler}
        storyData={storyData}
        currentImageIndex={currentImageIndex}
      />
    );
  }

  return (
    <ImageProvider>
      <div className={classes.container}>
        <Sidebar className={classes.sidebar} />
        <div className={classes.main}>
          <div className={classes['center-line']}>
            <Stories
              className={classes['stories-container']}
              onClick={storyOpenHandler}
              isStoryClicked={setIsOpened}
              storyData={storyData}
              currentIndex={currentIndexHandler}
            />
            <Feed posts={DUMMY_POSTS} />
          </div>
          <Recommended className={classes['recommended-container']} />
        </div>
      </div>
    </ImageProvider>
  );
}

export default App;

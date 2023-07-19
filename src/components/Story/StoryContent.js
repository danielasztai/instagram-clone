import { useEffect, useRef, useState } from 'react';

import classes from './StoryContent.module.css';

const StoryContent = props => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const curImgRef = useRef(null);

  const storyClickHandler = e => {
    props.isStoryClicked(true); //Ha ez ki van kommentelve akkor a curindex jó értéket ad

    const curImg = e.currentTarget.dataset.id;
    setCurrentIndex(curImg);
    curImgRef.current = curImg;

    props.currentIndex(curImgRef.current);
  };

  return (
    <div className={classes.content}>
      <div className={classes['img-container']}>
        {props.storyData.map((data, i) => (
          <div
            className={classes.pairs}
            key={data.id}
            data-id={data.id}
            onClick={storyClickHandler}
          >
            <img src={data.img} alt="" />
            <p className={classes['text-item']}>{data.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryContent;

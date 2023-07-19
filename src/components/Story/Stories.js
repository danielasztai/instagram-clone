import React from 'react';

import StoryContent from './StoryContent';

const Stories = props => {
  return (
    <div className={props.className}>
      <StoryContent
        storyData={props.storyData}
        storyImage={props.storyData.storyImage}
        isStoryClicked={props.isStoryClicked}
        currentIndex={props.currentIndex}
      />
    </div>
  );
};

export default Stories;

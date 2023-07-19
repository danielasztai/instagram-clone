import classes from './OpenedStory.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationArrow,
  faHeart,
  faPause,
  faVolumeXmark,
  faEllipsis,
  faX,
} from '@fortawesome/free-solid-svg-icons';

const OpenedStory = props => {
  const closeStoryHandler = () => {
    props.onCloseStory();
  };

  return (
    <div className={classes.background}>
      <span className={classes.logo}>
        <h1>Instagram</h1>
      </span>
      <button
        type="button"
        className={classes.close}
        onClick={closeStoryHandler}
      >
        <FontAwesomeIcon icon={faX} size="2xl" />
      </button>
      <div className={classes['img-container']}>
        {
          <img
            src={props.storyData[props.currentImageIndex].storyImage}
            alt=""
          />
        }
        <div className={classes.options}>
          <span className={classes['user-info']}>
            <img src={props.storyData[props.currentImageIndex].img} />
            <p>{props.storyData[props.currentImageIndex].user}</p>
          </span>
          <span className={classes['option-bar']}>
            <FontAwesomeIcon icon={faPause} />
            <FontAwesomeIcon icon={faVolumeXmark} />
            <FontAwesomeIcon icon={faEllipsis} />
          </span>
        </div>
        <div className={classes['input-container']}>
          <form>
            <input
              type="text"
              placeholder={`Válasz ${
                props.storyData[props.currentImageIndex].user
              } számára...`}
            ></input>
            <div className={classes.actions}>
              <FontAwesomeIcon icon={faHeart} size="xl" />
              <FontAwesomeIcon icon={faLocationArrow} size="xl" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OpenedStory;

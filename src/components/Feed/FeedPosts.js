import { useRef, useState } from 'react';

import classes from './FeedPosts.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationArrow,
  faHeart,
  faComment,
  faBookmark,
  faFaceSmile,
} from '@fortawesome/free-solid-svg-icons';

const FeedPosts = props => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const commentRef = useRef('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const commentSubmitHandler = e => {
    e.preventDefault();

    if (commentRef.current.value === '') {
      return;
    }

    console.log(commentRef.current.value);
    const newComment = commentRef.current.value;
    props.comments.push(newComment);
    console.log(props.comments);
    commentRef.current.value = '';
  };

  let buttonEnabled;
  const enableButtonHandler = e => {
    if (e.target.value !== '') {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  };

  let likedPost;
  let bookmarkedPost;

  if (!isLiked) {
    likedPost = `${classes.action}`;
  }
  if (isLiked) {
    likedPost = `${classes.liked}`;
  }

  if (!isBookmarked) {
    bookmarkedPost = `${classes.action}`;
  }
  if (isBookmarked) {
    bookmarkedPost = `${classes.bookmarked}`;
  }

  const likePostHandler = () => {
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  const bookmarkPostHandler = () => {
    if (!isBookmarked) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  };

  return (
    <div className={classes['feed-container']}>
      <section className={classes.author}>
        <div className={classes.sides}>
          <img src={props.profileImg} className={classes['profile-img']} />
        </div>
        <div className={classes['name-location']}>
          <p className={classes['author-name']}>{props.authorName}</p>
          <p className={classes.location}>{props.location}</p>
        </div>
        <div className={classes.dots}>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
        </div>
      </section>
      <section className={classes['img-container']}>
        <img src={props.img} alt="" className={classes.img} />
      </section>
      <section className={classes.comments}>
        <div className={classes.actions}>
          <FontAwesomeIcon
            icon={faHeart}
            size="xl"
            className={likedPost}
            onClick={likePostHandler}
          />
          <FontAwesomeIcon
            icon={faComment}
            size="xl"
            className={`${classes.action}`}
          />
          <FontAwesomeIcon
            icon={faLocationArrow}
            size="xl"
            className={`${classes.action}`}
          />
          <span className={classes.bookmark}>
            <FontAwesomeIcon
              icon={faBookmark}
              size="xl"
              className={bookmarkedPost}
              onClick={bookmarkPostHandler}
            />
          </span>
        </div>
        <p>
          <span className={classes['author-name']}>
            {props.numOfLikes.toLocaleString()} kedvelés
          </span>
        </p>
        <p>
          <span className={classes['author-name']}>{props.authorName} </span>
          {props.postedText}
        </p>
        <p className={`${classes['grey-text']} ${classes['show-comments']}`}>
          Az összes hozzászólás megtekintése ({props.numOfComments})
        </p>
        <p className={classes.date}>{props.date}</p>
        <div className={classes['new-comment']}>
          <FontAwesomeIcon
            icon={faFaceSmile}
            size="lg"
            className={classes.emoji}
          />
          <form onSubmit={commentSubmitHandler}>
            <input
              type="text"
              placeholder="Hozzászólás írása..."
              ref={commentRef}
              onChange={enableButtonHandler}
            />
            <span className={classes['send-comment']}>
              <button
                type="submit"
                disabled={buttonEnabled}
                className={isButtonEnabled ? classes.enabled : undefined}
              >
                Küldés
              </button>
            </span>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FeedPosts;

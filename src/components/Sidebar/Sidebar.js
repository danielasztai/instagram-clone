import { useState } from 'react';

import More from '../More/More';
import classes from './Sidebar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faMagnifyingGlass,
  faCompass,
  faClapperboard,
  faLocationArrow,
  faHeart,
  faSquarePlus,
  faUser,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = props => {
  const [isMoreClicked, setIsMoreClicked] = useState(false);

  const moreClickHandler = () => {
    if (!isMoreClicked) {
      setIsMoreClicked(true);
    } else {
      setIsMoreClicked(false);
    }
  };

  return (
    <div className={props.className}>
      <div className={classes.sidebar}>
        <h2 className={classes['instagram-logo']}>Instagram</h2>
        <ul className={classes['sidebar-list']}>
          <a href="#">
            <li className={classes['sidebar-items']}>
              <FontAwesomeIcon icon={faHouse} size="xl" />
              <p>Kezdőlap</p>
            </li>
          </a>
          <a href="#">
            <li className={classes['sidebar-items']}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
              <p>Keresés</p>
            </li>
          </a>
          <a href="#">
            <li className={classes['sidebar-items']}>
              <FontAwesomeIcon icon={faCompass} size="xl" />
              <p>Felfedezés</p>
            </li>
          </a>
          <a href="#">
            <li className={classes['sidebar-items']}>
              <FontAwesomeIcon icon={faClapperboard} size="xl" />
              <p>Reels</p>
            </li>
          </a>
          <a href="#">
            <li className={classes['sidebar-items']}>
              <FontAwesomeIcon icon={faLocationArrow} size="xl" />
              <p>Üzenetek</p>
            </li>
          </a>
          <a href="#">
            <li className={classes['sidebar-items']}>
              <FontAwesomeIcon icon={faHeart} size="xl" />
              <p>Értesítések</p>
            </li>
          </a>
          <a href="#">
            <li className={classes['sidebar-items']}>
              <FontAwesomeIcon icon={faSquarePlus} size="xl" />
              <p>Létrehozás</p>
            </li>
          </a>
          <a href="#">
            <li className={classes['sidebar-items']}>
              <FontAwesomeIcon icon={faUser} size="xl" />
              <p>Profil</p>
            </li>
          </a>
          {isMoreClicked && <More />}
          <a href="#">
            <li
              className={`${classes['sidebar-items']} ${classes.more}`}
              onClick={moreClickHandler}
            >
              <FontAwesomeIcon icon={faBars} size="xl" />
              <p>Továbbiak</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

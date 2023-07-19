import classes from './More.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faClockRotateLeft,
  faBookmark,
  faMoon,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';

const More = () => {
  return (
    <div className={classes['more-container']}>
      <ul>
        <li>
          <a href="#">
            Beállítások
            <span className={classes.icon}>
              <FontAwesomeIcon icon={faGear} />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            Saját tevékenységed{' '}
            <span className={classes.icon}>
              <FontAwesomeIcon icon={faClockRotateLeft} />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            Mentve{' '}
            <span className={classes.icon}>
              <FontAwesomeIcon icon={faBookmark} />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            Megjelenés átváltása{' '}
            <span className={classes.icon}>
              <FontAwesomeIcon icon={faMoon} />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            Probléma jelentése{' '}
            <span className={classes.icon}>
              <FontAwesomeIcon icon={faMessage} />
            </span>
          </a>
        </li>
        <li>
          <a href="#">Válts a fiókok között</a>
        </li>
        <li>
          <a href="#">Kijelentkezés</a>
        </li>
      </ul>
    </div>
  );
};

export default More;

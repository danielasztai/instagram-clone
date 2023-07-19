import { useContext } from 'react';

import classes from './Recommended.module.css';
import ImageContext from '../../store/image-context';
import Recommendations from './Recommendations';

const Recommended = props => {
  const imageCtx = useContext(ImageContext);

  return (
    <div className={props.className}>
      <div className={classes['own-profile']}>
        <img src={imageCtx.own_profile_img} className={classes.image} />
        <div className={classes.name}>
          <p>martha.meaningful11</p>
          <p>Martha Meaningful</p>
        </div>
        <span className={classes['end-of-line']}>
          <a href="#">Váltás</a>
        </span>
      </div>
      <div className={classes.separator}>
        <p>Neked javasoltak</p>
        <button type="button" className={classes['show-all']}>
          Az összes megtekintése
        </button>
      </div>
      <ul>
        <Recommendations />
      </ul>
      <p className={classes.links}>
        <a href="#">Névjegy</a>.<a href="#">Súgó</a>.<a href="#">Sajtó</a>.
        <a href="#">API</a>.<a href="#">Állások</a>.<a href="#">Adatvédelem</a>.
        <br />
        <a href="#">Feltételek</a>.<a href="#">Helyszínek</a>.
        <a href="#">Nyelv</a>.<a href="#">Meta Verified</a>
      </p>
      <p className={classes.copyright}>©2023 instagram from meta</p>
    </div>
  );
};

export default Recommended;

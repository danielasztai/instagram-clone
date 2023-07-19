import classes from './Recommendations.module.css';

import recommended_img_1 from '../../assets/recommended_1.webp';
import recommended_img_2 from '../../assets/recommended_2.webp';
import recommended_img_3 from '../../assets/recommended_3.jpeg';
import recommended_img_4 from '../../assets/recommended_4.jpeg';
import recommended_img_5 from '../../assets/recommended_5.jpeg';

const recommmendedUsers = [
  {
    id: 1,
    user_img: recommended_img_1,
    user_name: 'thomas_johnson1',
    isVerified: false,
  },
  {
    id: 2,
    user_img: recommended_img_2,
    user_name: 'victoriablurry_asd',
    isVerified: true,
  },
  {
    id: 3,
    user_img: recommended_img_3,
    user_name: 'johannabanks',
    isVerified: false,
  },
  {
    id: 4,
    user_img: recommended_img_4,
    user_name: 'thealicia_down',
    isVerified: true,
  },
  {
    id: 5,
    user_img: recommended_img_5,
    user_name: 'patrick_pl_lane',
    isVerified: true,
  },
];

const Recommendation = props => {
  return recommmendedUsers.map(user => (
    <li key={user.id} className={classes.item}>
      <img src={user.user_img} className={classes['recommended-img']}></img>
      <p>{user.user_name}</p>
      <span className={classes.separator}>
        <button type="button">Követem</button>
      </span>
    </li>
  ));
};

export default Recommendation;

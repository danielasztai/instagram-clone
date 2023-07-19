import ImageContext from './image-context';

import profile_img_1 from '../assets/profile_owner_img.webp';

const ImageProvider = props => {
  const imageContext = { own_profile_img: profile_img_1 };

  return (
    <ImageContext.Provider value={imageContext}>
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;

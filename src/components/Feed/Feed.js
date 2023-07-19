import FeedPosts from './FeedPosts';

const Feed = props => {
  return (
    <ul>
      {props.posts.map(post => (
        <FeedPosts
          key={post.id}
          authorName={post.authorName}
          img={post.img}
          postedText={post.postedText}
          numOfLikes={post.numOfLikes}
          date={post.date}
          numOfComments={post.numOfComments}
          location={post.location}
          profileImg={post.profileImg}
          comments={post.comments}
        />
      ))}
    </ul>
  );
};

export default Feed;

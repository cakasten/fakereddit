// import VideoControls from "../videoControls/VideoControls";
import Votes from "../votes/Votes";
import styles from "./posts.module.css";

const Post = (props) => {
  const {
    votes,
    title,
    author,
    subreddit,
    video,
    bodyImg,
    postData,
    handleClick,
  } = props;
  return (
     postData ? (
    <div className={styles.post}>
      <Votes votes={votes} styles={styles.vote} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.author}>Posted by: {author}</p>
      <p className={styles.subreddit} onClick={handleClick}>
        r/{subreddit}
      </p>
      {(video && (
        <div className={styles.body}>
          <video
            src={props.video}
            type="video/mp4"
            width="100%"
            height="auto"
            controls
          ></video>
          {/* <VideoControls /> */}
        </div>
      )) ||
        (bodyImg && (
          <img
            src={bodyImg.images[0].source.url}
            alt="nothing shown"
            className={styles.body}
          />
        ))}
      {postData.data.selftext && (
        <p className={styles.bodyText}>{postData.data.selftext}</p>
      )}
    </div>
    ) : (
      <div className={styles.post}>
        <Votes />
        <h1 className={styles.title}>Loading</h1>
      </div>
    )

  );
};

export default Post;

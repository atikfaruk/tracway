const HeroBg = () => {
  const styles = {
    container: "w-full h-full absolute inset-0",
    cover: "h-full w-full object-cover object-center",
  };

  return (
    <div className={styles.container}>
      <video autoPlay loop muted width={1920} height={1080} className={styles.cover}>
        <source
          src="https://res.cloudinary.com/dazc5yfhr/video/upload/v1742306802/Untitled_video_-_Made_with_Clipchamp_d7k08k.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroBg;

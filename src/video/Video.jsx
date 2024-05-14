import tomatovideo from "../../public/images/tomatovideo.mp4";

function Video() {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={tomatovideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;

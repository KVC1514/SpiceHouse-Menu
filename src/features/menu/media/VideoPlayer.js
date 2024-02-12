// import { useEffect, useRef } from "react";

// function VideoPlayer = ({ id, publicId, props })  => {

//   const videoRef = useRef();
//   const cloudinaryRef = useRef();
//   const playerRef = useRef();

//   useEffect(() => {
//     if (!window.cloudinary) {
//       console.error("Cloudinary not found. Make sure it is loaded.");
//       return;
//     }

//     window.cloudinary.VideoPlayer(videoRef.current, {
//       cloud_name: "kundancloud",
//     });
//   }, []);

//   return (
//     <video
//       ref={videoRef}
//       data-cld-public-id="video/kitchen"
//       width={width}
//       height={height}
//       controls
//       {...props}
//     />
//   );
// }

// export default VideoPlayer;

 
import { useSelector } from "react-redux";

const MovieVideo = () => {
  const video = useSelector((state) => state?.currentmovieandvideo?.curretvideo);
  if(video === null) return;

  return (
    <div className=" bg-black flex justify-center   ">
      {
        video === null ? 
        <h1>Loading...</h1>
        : 
        <iframe
        className="w-screen aspect-video -mt-3  md:w-10/12 sm:-mt-8 md:-mt-11  pointer-events-none"
        src={"https://www.youtube.com/embed/"+video?.key+"?rel=0&playlist="+video?.key+"&autoplay=1&mute=1&showinfo=0&controls=0&autohide=1&&cc_load_policy=0"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      }
    </div>
  );
};
export default MovieVideo;


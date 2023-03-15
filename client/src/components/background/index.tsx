import Video from "../../../src/assets/espace.mp4";
import "./styles.css";
import Image from "../../../src/assets/background.png";

export default function Background() {
  return (
    <div className="layout">
      <img className="image" src={Image} alt="background" />
      <video className='video' src={Video} autoPlay loop muted />
    </div>
  );
}
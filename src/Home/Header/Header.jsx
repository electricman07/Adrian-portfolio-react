import { Typewriter } from "react-simple-typewriter";

function Header() {
  return (
    <header id="home" className="main-header">
      <div className="left-section">
        <span className="hello-greeting">Hello, I am</span>
        <h1>Adrian</h1>
        <h2 className="subtitle-main">
          {" "}
          <Typewriter
            words={[" Production Designer.", "Director."]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={30}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h2>
      </div>
      <div className="right-section">
        <div className="video-container">
          <video className="video-width" width="560" loop muted autoPlay>
            <source
              src="../../assets/videos/placeholderVideo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag
          </video>
        </div>
      </div>
    </header>
  );
}

export default Header;

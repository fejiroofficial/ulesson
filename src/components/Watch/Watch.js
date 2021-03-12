import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Watch.css";
import arrowBack from "../../assets/arrow-back.svg";
import bigBlog from "../../assets/big-blob.svg";
import playButton from "../../assets/playbutton.svg";
import nativeButton from "../../assets/btn-native.svg";

const Watch = () => {
  const [watching, setWatching] = useState({});
  useEffect(() => {
    const watching = JSON.parse(localStorage.getItem("watching"));
    setWatching(watching);
  }, []);
  const history = useHistory();

  return (
    <div className="Watch">
      <img
        onClick={history.goBack}
        className="Watch-arrow-back"
        src={arrowBack}
        alt="back"
      />
      <img className="Watch-blob" src={bigBlog} alt="" />
      <div className="Watch-container">
        <div className="Watch-player">
          <ReactPlayer
            url={watching.lessonVideo}
            width="inherit"
            height="500px"
            style={{ borderRadius: "39px", background: "#2c2c2c" }}
            light={true}
            controls={true}
            loop={true}
            playIcon={<img src={playButton} alt="" />}
          />
        </div>
        <div className="Watch-lesson-name">{watching.lessonName}</div>
        <div className="Watch-lesson-chapter">{watching.chapter}</div>
        <button
          style={{ backgroundImage: `url(${nativeButton})` }}
          className="Watch-lesson-button"
          disabled={true}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Watch;

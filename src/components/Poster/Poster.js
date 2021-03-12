import React from "react";
import "./Poster.css";
import playButton from "../../assets/playbutton.svg";

const matchColors = (subject) => {
  switch (subject) {
    case "Mathematics":
      return "#EA7052";
    case "Physics":
      return "#7B7FDA";
    case "Chemistry":
      return "#E48E45";
    case "Biology":
      return "#4DA47E";
    case "English":
      return "#7B7FDA";
    default:
      return "grey";
  }
};

const Poster = ({ subject, topic, lesson, icon, watchCourse }) => {
  return (
    <div
      onClick={() => watchCourse(subject, topic, lesson)}
      className="Poster-card"
    >
      <div className="Poster">
        <img className="Poster-banner" src={icon} alt="" />
        <img className="Poster-play-btn" src={playButton} alt="" />
      </div>
      <div>
        <div className="Poster-subject" style={{ color: matchColors(subject) }}>
          {subject}
        </div>
        <div className="Poster-topic">{topic}</div>
      </div>
    </div>
  );
};

export default Poster;

import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Poster from "../Poster";
import "./Home.css";
import physics from "../../assets/physics.svg";
import english from "../../assets/english.svg";
import chemistry from "../../assets/chemistry.svg";
import maths from "../../assets/maths.svg";
import biology from "../../assets/biology.svg";
import handVector from "../../assets/hand-vector.svg";
import bottomBlob from "../../assets/bottom-blob.svg";
import moreVertical from "../../assets/more-vertical.svg";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: {
            data: { status, subjects },
          },
        } = await axios.get(
          "https://jackiechanbruteforce.ulesson.com/3p/api/content/grade"
        );
        if (status === "success") {
          // save to store
          localStorage.setItem("subjects", JSON.stringify(subjects));
          setCourses(subjects);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  let history = useHistory();

  const watchCourse = (courseName, chapter, lesson) => {
    history.push(`/subject/${courseName.toLowerCase()}/watch`);
    const watching = {
      chapter,
      lessonName: lesson.name,
      lessonVideo: lesson.media_url,
    };
    localStorage.setItem("watching", JSON.stringify(watching));
  };
  return (
    <div className="Home">
      <img className="Home-palm-img" src={handVector} alt="" />
      <div className="Home-container">
        <h1>Hello Hassan,</h1>
        <section className="Home-cards-top">
          <Link to="/subject/mathematics">
            <img src={maths} alt="mathematics" />
          </Link>
          <Link to="/subject/physics">
            <img src={physics} alt="physics" />
          </Link>
          <Link to="/subject/chemistry">
            <img src={chemistry} alt="chemistry" />
          </Link>
          <Link to="/subject/biology">
            <img src={biology} alt="biology" />
          </Link>
          <Link to="/subject/english">
            <img src={english} alt="english" />
          </Link>
        </section>
        <section className="Home-posters">
          <h2>Recently watched topics</h2>
          <button>SEE ALL</button>
          <img className="Home-more" src={moreVertical} alt=""/>
          <div className="Home-posters-box">
            {courses.map((course) => {
              return (
                course.name !== "English" && (
                  <Poster
                    watchCourse={watchCourse}
                    subject={course.name}
                    topic={course.chapters[0].name}
                    lesson={course.chapters[0].lessons[0]}
                    key={course.id}
                    icon={course.icon}
                  />
                )
              );
            })}
          </div>
        </section>
        <section className="Home-posters">
          <h2>Recommended videos</h2>
          <button>SEE ALL</button>
          <img className="Home-more" src={moreVertical} alt=""/>
          <div className="Home-posters-box">
            {courses.map((course) => {
              return (
                course.name !== "English" && (
                  <Poster
                    watchCourse={watchCourse}
                    subject={course.name}
                    topic={course.chapters[0].name}
                    lesson={course.chapters[0].lessons[0]}
                    key={course.id}
                    icon={course.icon}
                  />
                )
              );
            })}
          </div>
        </section>
      </div>
      <img className="Home-blob-img" src={bottomBlob} alt="" />
    </div>
  );
};

export default Home;

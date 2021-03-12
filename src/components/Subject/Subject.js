import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Subject.css";
import arrowBack from "../../assets/arrow-back.svg";
import fraction from "../../assets/fraction.svg";

const Subject = () => {
  let { name } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    const subjects = JSON.parse(localStorage.getItem("subjects"));
    const subject = subjects.find(
      (subject) => subject.name.toLowerCase() === name.toLowerCase()
    );
    setCourse(subject);
  }, [name]);

  let history = useHistory();

  const watchCourse = (courseName, chapter, lesson) => {
    history.push(`/subject/${courseName.toLowerCase()}/watch`);
    const watching = {
      chapter,
      lessonName: lesson.name,
      lessonVideo: lesson.media_url
    };
    localStorage.setItem("watching", JSON.stringify(watching));
  };

  return (
    <div className="Subject">
      <img
        onClick={history.goBack}
        className="Subject-arrow-back"
        src={arrowBack}
        alt="back"
      />
      <img className="Subject-fraction" src={fraction} alt="" />
      {Object.keys(course).length ? (
        <div className="Subject-container">
          <h1>{course.name}</h1>
          {course.chapters.map((chapter, index) => (
            <section key={chapter.id} className="Subject-topic">
              <h2>
                {index + 1}. {chapter.name}
              </h2>
              <div className="Subject-lessons">
                {chapter.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="Subject-lesson-card"
                    onClick={() =>
                      watchCourse(course.name, chapter.name, lesson)
                    }
                  >
                    <div className="Subject-lesson-thumb">
                      <img src={lesson.icon} alt="" />
                    </div>
                    <div className="Subject-lesson-title">
                      {lesson.name.length > 20
                        ? `${lesson.name.slice(0, 30)}...`
                        : lesson.name}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Subject;

import React from "react";
import learningImage from "../Images/learing.jpg";
import "../Pages-Styles/MainPage.css";
const MainPage: React.FC = () => {
  // border: 5px solid black

  return (
    <main style={{ background: "purple" }}>
      <div className="container">
        <div className="text-div">
          <p style={{ fontSize: "50px", fontWeight: "bold", color: "white" }}>
            Welcome to My Page!
          </p>
          <p style={{ fontSize: "20px", color: "white", marginTop: "30px" }}>
            Our learning website offers a wide range of courses designed to help
            you acquire new skills in various fields, from technology to arts
            and sciences. With interactive lessons, quizzes, and hands-on
            projects, you can engage deeply with the material and track your
            progress along the way.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <button id="btn1">Start Learning</button>
            <button className="btn2">Explore Courses</button>
          </div>
        </div>
        <div className="image-div">
          <img id="img" src={learningImage} alt="Description" />
        </div>
      </div>
    </main>
  );
};

export default MainPage;

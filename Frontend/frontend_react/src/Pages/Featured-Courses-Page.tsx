// border: 5px solid black

import "../Pages-Styles/Featured-Courses-Page.css";


const FeaturedCourses: React.FC = () => {
  return (
    <div>
      <h1 id="title">Featured Courses</h1>

      <div className="Course-container">
        <div className="Course-Content">
          <img
                      src="/Images/WebDev.jpg"
            alt="Description"
            style={{
              width: "270px",
              height: "150px",
              marginLeft: "11px",
              marginTop: "0",
            }}
          ></img>
          <p className="category">Development</p>
          <h5>Web Development Bootcamp</h5>
          <p>Learn HTML, CSS, Java Script and Node Js</p>
          <p className="price"> $89.99</p>
          <button className="course-btn">Enroll Now</button>
        </div>

        <div className="Course-Content">
          <img
                      src="/Images/data-science.jpg"
            alt="Description"
            style={{
              width: "270px",
              height: "150px",
              marginLeft: "11px",
              marginTop: "0",
            }}
          ></img>
          <p className="category">Data Science</p>
          <h5>Data Science and AI</h5>
          <p>Learn Python and ,machine learning algorithms</p>
          <p className="price"> $129.99</p>
          <button className="course-btn">Enroll Now</button>
        </div>

        <div className="Course-Content">
          <img
                      src="/Images/UiUx.jpg"
            alt="Description"
            style={{
              width: "270px",
              height: "150px",
              marginLeft: "11px",
              marginTop: "0",
            }}
          ></img>
          <p className="category">Design</p>
          <h5>UI Ux Design MasterClass</h5>
          <p>Learn design prnciples ,user search and prototyping </p>
          <p className="price"> $99.99</p>
          <button className="course-btn">Enroll Now</button>
        </div>
      </div>
      <div className="btn-container">
        <button id="All-Courses-btn">View All Courses</button>
      </div>
    </div>
  );
};

export default FeaturedCourses;

import React from 'react';
import './BodyContent.css';

function BodyContent() {
  return (
    <div className='bodyMain'>
      <div className='aboutme'>
        <h1>About Me</h1>
        <h1 className='aboutmeh12'>About Me</h1>
        <p>
          Hi, I'm a dedicated web developer with a passion for creating intuitive and dynamic user experiences. My expertise lies in front-end development, and I have a strong command over HTML, CSS, JavaScript, and React. I strive to write clean, efficient code and continuously enhance my skills to stay current with industry trends.
        </p>
      </div>
      <div className="chooseMe">
        <h1>Why Choose Me?</h1>
        <div className="cards">
          <div className="card1">
            <h2>Extensive Experience</h2>
            <p>
              With over 2 years of experience in web development, I have successfully delivered numerous projects. My portfolio includes a variety of web applications, from single-page websites to complex, multi-functional platforms. I take pride in my ability to understand client needs and translate them into high-quality digital solutions.
            </p>
          </div>
          <div className="card2">
            <h2>Commitment to Quality</h2>
            <p>
              I am committed to delivering top-notch quality in every project I undertake. My attention to detail ensures that each website is not only visually appealing but also performs seamlessly across different devices and browsers. I believe in building responsive, user-friendly interfaces that enhance user engagement.
            </p>
          </div>
          <div className="card3">
            <h2>Continuous Learning</h2>
            <p>
              The tech industry is constantly evolving, and so am I. I am dedicated to continuous learning and professional development. By staying updated with the latest tools, frameworks, and best practices, I ensure that my skills remain relevant and that I can provide innovative solutions to my clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyContent;

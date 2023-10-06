import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            Hey, I am Adwait. I am born and brought-up in Nagpur. I am
            pursuing my B.Tech in Computer Science and Engineering From
            Yeshwantrao Chavan College of Engineering (YCCE) Nagpur. My
            coursework has euipped me with a broad range of skills such as
            programming, software development and problem solving. My strengths
            are my posetive attitude, punctuality and interpersonal skills.
          </p>
          <p>
            As a developer, I have always been passionate about creating elegant
            and effective solutions to complex problems. I have a strong
            foundation in programming languages such as PYTHON, C and C++. I
            enjoy working on both the web applications and android applications.
            My hobbies include playing and watching sports, solving puzzel and
            competitive programming. I am looking forward to work in a reputed
            organization where I can enhance my skills, make new connections and
            gain some valuable experience.
          </p>
        </div>
        <div className="about-img">
          <Image
            src="/images/about.jpg"
            className="profile-img"
            width={3456}
            height={3456}
            alt="About Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

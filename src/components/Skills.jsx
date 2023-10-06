import Image from "next/image";

const Skills = () => {
  return (
    // <div className="skills-container">
    //     <h2>Skills</h2>
    //     <div className="grid-skills">
    //         <div className="skill-card html">
    //             <i className="fa-brands fa-html5 html-icon"></i>
    //             <p>HTML</p>
    //         </div>
    //         <div className="skill-card css">
    //             <i className="fa-brands fa-css3-alt css-icon"></i>
    //             <p>CSS</p>
    //         </div>
    //         <div className="skill-card js">
    //             <i className="fa-brands fa-js-square js-icon"></i>
    //             <p>JavaScript</p>
    //         </div>
    //         <div className="skill-card react">
    //             <i className="fa-brands fa-react react-icon"></i>
    //             <p>React</p>
    //         </div>
    //         <div className="skill-card node">
    //             <i className="fa-brands fa-node-js node-icon"></i>
    //             <p>Node</p>
    //         </div>
    //         <div className="skill-card python">
    //             <i className="fa-brands fa-python python-icon"></i>
    //             <p>Python</p>
    //         </div>
    //     </div>
    // </div>

    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card">
          <Image
            src="/images/html.png"
            className="html "
            alt="html"
            width={70}
            height={70}
          />
        </div>
        <div className="skill-card">
          <Image
            src="/images/css.png"
            className="css "
            alt="html"
            width={70}
            height={70}
          />
        </div>
        <div className="skill-card">
          <Image
            src="/images/node-js.png"
            className="js "
            alt="html"
            width={70}
            height={70}
          />
        </div>
        <div className="skill-card">
          <Image
            src="/images/php.png"
            className="html "
            alt="html"
            width={70}
            height={70}
          />
        </div>

        <div className="skill-card">
          <Image
            src="/images/python.png"
            className="html "
            alt="html"
            width={70}
            height={70}
          />
        </div>
        <div className="skill-card">
          <Image
            src="/images/c.png"
            className="html "
            alt="html"
            width={70}
            height={70}
          />
        </div>
        <div className="skill-card">
          <Image
            src="/images/cpp.png"
            className="html "
            alt="html"
            width={70}
            height={70}
          />
        </div>
        <div className="skill-card">
          <Image
            src="/images/mysql.png"
            className="html "
            alt="html"
            width={70}
            height={70}
          />
        </div>

        <div className="skill-card">
          <Image
            src="/images/android-studio.png"
            className="html "
            alt="html"
            width={70}
            height={70}
          />
        </div>
        <div className="skill-card">
          <Image
            src="/images/firebase.png"
            className="html "
            alt="html"
            width={70}
            height={70}
          />
        </div>
        <div className="skill-card">
          <Image
            src="/images/git.png"
            className="html "
            alt="html"
            width={70}
            height={70}
          />
        </div>
        <div className="skill-card">
          <Image
            src="/images/netlify.png"
            className="html "
            alt="html"
            width={70}
            height={70}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

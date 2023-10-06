import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/profile.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="Profile Photo"
      />
      <div className="hero-text">
        <h1>Hey, I am Adwait 👋</h1>
        <p>
          I am a software developer based in Nagpur, India. I am specialize in
          building exceptional websites,
          android applications, and everything in between.
        </p>
        <div className="social-icons">
          <a
            href="https://instagram.com/adwait1605p?igshid=NzZIODBkYWE4Ng=="
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://x.com/adwait_tikekar?t=3L9q_QaJwfvLBzm0EfO9dQ&s=09"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/Adwait18-cpu"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="http://www.linkedin.com/in/adwait-tikekar-07673a238"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

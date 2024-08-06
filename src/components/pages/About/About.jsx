import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";
import resume from "../../../assets/mahe/mahendran_p_latest.pdf";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading title="About" />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
          Hi, I am Mahendran, I’m a seasoned web developer with a passion for
          creating innovative online experiences. With over 2 years of
          experience in the industry, I have honed my skills across various
          programming languages, front-end and back-end technologies, and have
          successfully contributed to a range of web development projects.
        </p>{" "}
        <br />
        {/* heading */}
        <Heading title="My Skills" />
        <p>
          JavaScript, PHP, HTML5/CSS, MySQL, Firebase, MongoDB, React.js,
          Node.js, Next.js, JSON, Rest API, CodeIgniter, Python
        </p>
        <br />
        <Heading title="Industry Knowledge" />
        <p>
          Web applications, front-end design and development, responsive web
          design, back-end and API development
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <a href="https://github.com/Mahe5130"><AiFillGithub className="social-btn" /></a>
          <a href="https://www.linkedin.com/in/mahendran-p-550b54252/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><AiFillLinkedin className="social-btn" /></a>
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href={resume} className="primary-btn" download={""}>
            Download Resume
          </a>
          <a href="tel:6360573638" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

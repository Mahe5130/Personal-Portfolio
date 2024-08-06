import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const Experience = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="Work Experience"
        subtitle="STEED 26 SOLUTIONS — Software Engineer"
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>March 2024 - PRESENT</p>
        <ul className="list-disc list-inside">
          <li>Designed and built e-commerce websites for several clients.</li>
          <li>Built reusable web components for creating websites.</li>
          <li>
            Built back-end services and admin tools using PHP and frameworks
                   like CodeIgniter, React, Python.
          </li>
          <li>
            Handled migration, updation and maintenance of websites. Created
            APIs using CodeIgniter, Express.js, Python.
          </li>
          <li> Integrated Razorpay & Cashfree for handling payments.</li>
        </ul>{" "}
      </div>

      {/* heading */}
      <Heading subtitle="Designshop 24/7 Creative Media — Front-End Developer"/>
      <div className="mt-10 text-slate-500">
        <p>November 2022 - February 2024</p>
        <ul className="list-disc list-inside">
          <li>Designed and built e-commerce websites for clients.</li>
          <li>Built reusable web components for creating websites.</li>
          <li>
            Built back-end services using PHP and frameworks
                   like ReactJs.
          </li>
          <li>
            Handled migration, updation and maintenance of websites. Created
            APIs using Express.js, PHP.
          </li>
        </ul>{" "}
      </div>

      <div className="mt-10 text-slate-500">
       
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
        <a href="https://github.com/Mahe5130"><AiFillGithub className="social-btn" /></a>
        <a href="https://www.linkedin.com/in/mahendran-p-550b54252/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><AiFillLinkedin className="social-btn" /></a>
        </div>
      </div>
    </div>
  );
};

export default Experience;

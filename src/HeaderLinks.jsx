import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";

export default function HeaderLinks({ email, phoneNumber }) {
  return (
    <nav className="flex items-center gap-6 mt-2">
      <h4 className="flex gap-2 items-center">
        <IoMail /> {email}
      </h4>
      <h4 className="flex gap-2 items-center">
        <FaPhone /> {phoneNumber}
      </h4>
      <h4>
        <a
          href=""
          target="_blank"
          className="flex gap-2 items-center"
        >
          <IoLogoGithub /> GitHub
        </a>
      </h4>
    </nav>
  );
}

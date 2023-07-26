import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: " rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://Github.com",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:kothemvenkatesh@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/TCS NQT ‘23 Arsh Sheet.pdf",
      style: " rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden  lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {Links.map(({ id, href, style, download, child }) => (
          <li
            key={id}
            className={
              "flex items-center justify-between w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 " +
              " " +
              style
            }
          >
            <a
              className="flex items-center justify-between w-full text-white"
              download={download}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

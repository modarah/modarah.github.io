import React from "react";
import { RiGithubFill, RiXingFill, RiLinkedinFill } from "react-icons/ri";
// import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";
// import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },{
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/technologies",
    text: "technologies",
  },
  {
    id: 4,
    url: "/projects",
    text: "projects",
  },
  // {
    // id: 4,
    // url: "/#contact",
    // text: "contact",
  // },
];

export const social = [
  {
    id: 1,
    url: "https://github.com/modarah",
    icon: <RiGithubFill />,
  },
  {
    id: 2,
    url: "https://www.xing.com/profile/Modar_AboHassoun",
    icon: <RiXingFill />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/modar-abohassoun/",
    icon: <RiLinkedinFill />,
  },
];

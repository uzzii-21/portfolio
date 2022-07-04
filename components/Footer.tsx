import GithubIcon from "../public/social-icons/github.svg";
import FacebookIcon from "../public/social-icons/facebook.svg";
import LinkedinIcon from "../public/social-icons/linkedin.svg";
import Image from "next/image";
import { info } from "../constant/info";

const Footer = () => {
  return (
    <footer className="border-stroke border flex items-center">
      <div className="flex items-center">
        <p className="border-r border-stroke py-5 px-8">find me in:</p>
        <a
          className="border-r border-stroke h-[64px] w-[66px] flex items-center justify-center hover:text-white"
          href={info.linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </a>
        <a
          className="border-r border-stroke h-[64px] w-[66px] flex items-center justify-center hover:text-white"
          href={info.facebook}
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      </div>
      <a
        className="border-l border-stroke ml-auto flex items-center h-[64px] px-8 hover:text-white"
        href={info.github}
        target="_blank"
        rel="noreferrer"
      >
        <span className="mr-2">@uzzii-21</span>
        <GithubIcon />
      </a>
    </footer>
  );
};

export default Footer;

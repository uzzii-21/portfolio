import GithubIcon from "../public/social-icons/github.svg";
import FacebookIcon from "../public/social-icons/facebook.svg";
import LinkedinIcon from "../public/social-icons/linkedin.svg";
import { info } from "../constant/info";

const Footer = () => {
  return (
    <footer className="border-stroke border-y">
      <div className="flex items-center">
        <p className="border-r border-stroke py-5 px-5 lg:px-8 hidden sm:block">
          find me in:
        </p>
        <div className="flex-1 flex items-center justify-end">
          <a
            className="border-l lg:border-x-0 border-stroke h-[64px] px-5 flex items-center justify-center hover:text-white"
            href={info.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            className="border-l lg:border-r border-stroke h-[64px] px-5 flex items-center justify-center hover:text-white"
            href={info.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            className="border-l border-stroke h-[64px] px-5 lg:px-8 flex items-center justify-center hover:text-white lg:ml-auto"
            href={info.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="mr-2 hidden lg:block">@uzzii-21</span>
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

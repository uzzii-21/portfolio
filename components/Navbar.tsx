import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { info } from "../constant/info";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="border-stroke border flex items-center">
      <Link href="/">
        <a
          className={`py-5 px-8 border-r border-stroke w-[20%] relative nav-hover`}
        >
          {info.name.toLocaleLowerCase().replace(" ", "-")}
        </a>
      </Link>
      <nav className="flex items-center">
        <Link href="/">
          <a
            className={`${
              router.pathname == "/" ? "active-nav text-white" : ""
            } py-5 px-8 border-r border-stroke hover:text-white relative nav-hover`}
          >
            _hello
          </a>
        </Link>
        <Link href="/about-me">
          <a
            className={`${
              router.pathname == "/about-me" ? "active-nav text-white" : ""
            } py-5 px-8 border-r border-stroke hover:text-white relative nav-hover`}
          >
            _about-me
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={`${
              router.pathname == "/projects" ? "active-nav text-white" : ""
            } py-5 px-8 border-r border-stroke hover:text-white relative nav-hover`}
          >
            _projects
          </a>
        </Link>
        <Link href="/certificates">
          <a
            className={`${
              router.pathname == "/certificates" ? "active-nav text-white" : ""
            } py-5 px-8 border-r border-stroke hover:text-white relative nav-hover`}
          >
            _certificates
          </a>
        </Link>
      </nav>
      <Link href="/contact-me">
        <a
          className={`${
            router.pathname == "/contact-me" ? "active-nav text-white" : ""
          } py-5 px-8 border-l border-stroke hover:text-white ml-auto relative nav-hover`}
        >
          _contact-me
        </a>
      </Link>
    </header>
  );
};

export default Navbar;

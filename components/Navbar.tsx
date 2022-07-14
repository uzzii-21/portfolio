import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { info } from "../constant/info";

const Navbar = () => {
  const router = useRouter();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const clickHandler = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <header className="border-stroke border-y flex items-center">
      <Link href="/">
        <a
          className={`py-5 px-5 lg:px-8 border-r border-stroke w-full lg:w-[20%] relative nav-hover`}
        >
          {info.name.toLocaleLowerCase().replace(" ", "-")}
        </a>
      </Link>
      <nav className="items-center hidden lg:flex">
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
          } py-5 px-8 border-l border-stroke hover:text-white ml-auto relative nav-hover hidden lg:block`}
        >
          _contact-me
        </a>
      </Link>

      <button
        aria-label="Menu Hamburger"
        onClick={clickHandler}
        className="flex lg:hidden items-center space-x-2 focus:outline-none bg-secondary text-fontColor active:text-white py-5 px-5 lg:px-8 group ml-auto"
      >
        <span className="">Menu</span>

        <div className="w-6 flex items-center relative">
          <span
            className={`${
              isNavbarOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
            } transform transition w-full h-[1.5px] bg-current absolute`}
          ></span>

          <span
            className={` ${
              isNavbarOpen ? "opacity-0 translate-x-3" : "opacity-100"
            } transform transition w-full h-[1.5px] bg-current absolute`}
          ></span>

          <span
            className={`${
              isNavbarOpen
                ? "translate-y-0 -rotate-45 w-full"
                : "translate-y-2 w-[70%]"
            } transform group-hover:w-full transition-all h-[1.5px] bg-current absolute`}
          ></span>
        </div>
      </button>
    </header>
  );
};

export default Navbar;

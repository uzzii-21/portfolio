import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { info } from "../constant/info";

const Navbar = () => {
  const router = useRouter();
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const menuHandler = () => {
    if (window.innerWidth < 1024) {
      if (!isNavbarOpen) {
        navbarRef.current?.classList.remove("hidden");
        navbarRef.current?.classList.add("flex");
      } else {
        navbarRef.current?.classList.add("hidden");
        navbarRef.current?.classList.remove("flex");
      }
      setIsNavbarOpen(!isNavbarOpen);
    }
  };
  return (
    <header className="border-stroke border-y flex items-center relative">
      <Link href="/">
        <a
          onClick={() => isNavbarOpen && menuHandler()}
          className={`py-5 px-5 lg:px-8 border-r border-stroke w-full lg:w-[20%] relative nav-hover`}
        >
          {info.name.toLocaleLowerCase().replace(" ", "-")}
        </a>
      </Link>
      <nav
        ref={navbarRef}
        className="items-center flex-col lg:flex-row absolute lg:static top-[65px] left-0 w-full h-[calc(100vh-134px)] lg:w-auto lg:h-auto bg-primary z-50 lg:z-0 hidden lg:flex"
      >
        <Link href="/">
          <a
            onClick={menuHandler}
            className={`${
              router.pathname == "/" ? "active-nav text-white" : ""
            } py-5 px-8 border-b lg:border-b-0 w-full lg:w-auto lg:border-r border-stroke hover:text-white relative nav-hover`}
          >
            _hello
          </a>
        </Link>
        <Link href="/about-me">
          <a
            onClick={menuHandler}
            className={`${
              router.pathname == "/about-me" ? "active-nav text-white" : ""
            } py-5 px-8 border-b lg:border-b-0 w-full lg:w-auto lg:border-r border-stroke hover:text-white relative nav-hover`}
          >
            _about-me
          </a>
        </Link>
        <Link href="/projects">
          <a
            onClick={menuHandler}
            className={`${
              router.pathname == "/projects" ? "active-nav text-white" : ""
            } py-5 px-8 border-b lg:border-b-0 w-full lg:w-auto lg:border-r border-stroke hover:text-white relative nav-hover`}
          >
            _projects
          </a>
        </Link>
        <Link href="/certificates">
          <a
            onClick={menuHandler}
            className={`${
              router.pathname == "/certificates" ? "active-nav text-white" : ""
            } py-5 px-8 border-b lg:border-b-0 w-full lg:w-auto lg:border-r border-stroke hover:text-white relative nav-hover`}
          >
            _certificates
          </a>
        </Link>
        <Link href="/contact-me">
          <a
            onClick={menuHandler}
            className={`${
              router.pathname == "/certificates" ? "active-nav text-white" : ""
            } py-5 px-8 border-b lg:border-b-0 w-full lg:w-auto lg:border-r border-stroke hover:text-white relative nav-hover block lg:hidden`}
          >
            _contact-me
          </a>
        </Link>
      </nav>
      <Link href="/contact-me">
        <a
          onClick={menuHandler}
          className={`${
            router.pathname == "/contact-me" ? "active-nav text-white" : ""
          } py-5 px-8 border-b lg:border-b-0 w-full lg:w-auto lg:border-l border-stroke hover:text-white ml-auto relative nav-hover hidden lg:block`}
        >
          _contact-me
        </a>
      </Link>

      <button
        aria-label="Menu Hamburger"
        onClick={menuHandler}
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

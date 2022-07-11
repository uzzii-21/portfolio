import type { NextPage } from "next";
import Head from "next/head";
import { info } from "../constant/info";
//importing typewriter-effect
import Typewriter from "typewriter-effect";

// max screen with = max-w-[1160px]
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>uzair-ahmed | _hello 👋</title>
      </Head>
      <section className="max-w-screen-xl mx-auto px-5 lg:px-8 flex items-center justify-start h-full">
        <div>
          <h1 className="text-lg text-white">
            Hi <span className="hand inline-block">👋</span> . I am
            <br />
            <strong className="text-6xl font-medium">{info.name}</strong>
          </h1>
          <h2 className="text-3xl text-blue mt-4 flex items-center">
            <span className="mr-2"> &gt; </span>
            <Typewriter
              options={{
                strings: info.title,
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="my-1 mt-24">{"// complete the game to continue"}</p>
          <p className="my-1">{"// you can also see it on my Github page"}</p>
          <p className="my-1">
            <span className="text-blue">const </span>
            <span className="text-green">githubLink </span>
            <span className="text-white">= </span>
            <a
              href={info.github}
              className="text-orange hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {info.github}
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

import { Typography, Box, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { MutableRefObject } from "react";
import { Trans } from "react-i18next";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import open_ai_logo from "../../assets/open_ai_logo.png";
import langchain_logo from "../../assets/lang_chain_logo.png";
import pinecone_logo from "../../assets/pinecone_logo.png";

export const LandingPageHero = ({
  arrowButtonRef,
}: {
  arrowButtonRef: MutableRefObject<HTMLElement | null>;
}) => {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div
        className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl"
        style={{ zIndex: 100 }}
      >
        <div className="text-center">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-200/50">
                {t("landingPage.header.note")}
              </p>
            </div>
            <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="b039bae0-fdd5-4311-b198-8557b064fce0"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">
                  {t("landingPage.header.titleFirstWord")}
                </span>{" "}
                {t("landingPage.header.titleRest")}
              </span>
            </h1>
            <p className="text-base text-gray-700 md:text-lg">
              <Trans
                i18nKey="landingPage.header.subtitle"
                components={{
                  under: <u />,
                  strong: <strong />,
                }}
              />
            </p>
            <div className="mt-10">
              <PoweredBySection />
            </div>
          </div>
          <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              style={{ zIndex: 100 }}
              placeholder="Enter your email"
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 bg-dark-lavender font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </button>
          </form>
          <p className="max-w-md mx-auto mb-10 text-xs text-gray-600 sm:text-sm md:mb-16">
            {t("landingPage.header.joinNewsletter")}
          </p>
          <div
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
            onClick={() =>
              window.scrollTo({
                top: arrowButtonRef.current?.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  function PoweredBySection() {
    return (
      <div className="flex flex-col text-center w-full text-gray-700">
        <div className="pb-5">
          <Divider orientation="horizontal" variant="middle" />
        </div>
        <Typography
          variant="body2"
          fontFamily={"Radio Canada Big"}
          className="mb-2"
        >
          {t("landingPage.header.poweredBy")}
        </Typography>
        <div className="flex justify-center items-center">
          <div>
            <Box
              component="img"
              alt="OpenAI logo"
              src={open_ai_logo}
              className="cursor-pointer w-8rem animate-bounce"
            />
          </div>
          <div className="mx-20">
            <Box
              component="img"
              alt="LangChain logo"
              src={langchain_logo}
              className="cursor-pointer w-8rem animate-bounce"
            />
          </div>
          <div>
            <Box
              component="img"
              alt="Pinecone logo"
              src={pinecone_logo}
              className="cursor-pointer w-8rem animate-bounce"
            />
          </div>
        </div>{" "}
        <div className="pt-5">
          <Divider orientation="horizontal" variant="middle" />
        </div>
      </div>
    );
  }
};

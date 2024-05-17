import React from "react";
import { useState } from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

export function ExplainerSection(props: {
  text: string;
  title: string;
  image: string;
  orientation: string; // "IMAGE_RIGHT" | "IMAGE_LEFT"
  textAnimation?: string;
  imageAnimation?: string;
}) {
  const { text, title, image, orientation, textAnimation, imageAnimation } =
    props;
  if (orientation === "IMAGE_RIGHT") {
    return (
      <div className="fade-in flex flex-row justify-center items-center w-screen mb-10 ">
        <div className="flex flex-col w-1/4 items-end animate-fade-in ">
          <ScrollAnimation animateIn={textAnimation ?? "fadeIn"}>
            <h3 className="text-2xl font-semibold py-3">{title}</h3>
            <p className="text-right text-xl">{text}</p>
          </ScrollAnimation>
        </div>
        <div className="flex w-2/2 p-3 ml-10 w-1/2 z-1">
          <ScrollAnimation animateIn={imageAnimation ?? "slideInRight"}>
            <img src={image} className="rounded-md shadow-md" />
          </ScrollAnimation>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-center items-center w-screen mb-10 ">
      <div className="flex w-2/2 p-3 mr-10 w-1/2 z-1">
        <ScrollAnimation animateIn={imageAnimation ?? "slideInLeft"}>
          <img src={image} className="rounded-md shadow-md" />
        </ScrollAnimation>
      </div>
      <div className="flex flex-col w-1/4 items-start z-1">
        <ScrollAnimation animateIn={textAnimation ?? "fadeIn"}>
          <h3 className="text-2xl font-semibold py-3">{title}</h3>
          <p className="text-left text-xl">{text}</p>
        </ScrollAnimation>
      </div>
    </div>
  );
}

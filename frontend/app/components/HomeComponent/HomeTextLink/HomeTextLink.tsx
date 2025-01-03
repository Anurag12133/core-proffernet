"use client";
import React from "react";
import { LinkPreview } from "@/app/components/ui/link-preview";
import HeroSlider from "./HomeSlider";

const TextLink = () => {
  return (
    <div className="flex justify-center items-center h-[60rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        From Code to Collaboration: Write Code in{" "}
        <LinkPreview url="https://react.dev/learn" className="font-bold">
          React,
        </LinkPreview>{" "}
        <LinkPreview
          url="https://docs.djangoproject.com/en/5.1/"
          className="font-bold"
        >
          Django
        </LinkPreview>{" "}
        &{"     "}
        <LinkPreview
          url="https://nodejs.org/docs/latest/api/"
          className="font-bold"
        >
          Node
        </LinkPreview>{" "}
        and More.
      </p>
      <div className="">
        <HeroSlider />
      </div>
    </div>
  );
};

export default TextLink;

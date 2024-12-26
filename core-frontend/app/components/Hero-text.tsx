"use client";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";
import "../css/Loader.css";

const HeroText = () => {
  const words = [
    { text: "Build" },
    { text: "&," },
    { text: "Practice.", className: "text-blue-500 dark:text-blue-500" },
  ];

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      router.push("http://localhost:3001/pages/auth");
    }, 500);
  };

  return (
    <div className="flex flex-col items-start h-[40rem] w-full overflow-hidden px-4">
      <TypewriterEffectSmooth words={words} className="max-w-full" />
      <p className="text-neutral-600 dark:text-neutral-200 text-2xl font-bold mb-4">
        Innovative platform designed to connect students and project creators in
        a seamless, collaborative environment.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
        <button
          className={`w-40 h-10 rounded-xl bg-black dark:border-white border text-white text-sm 
                      hover:bg-white hover:text-black flex items-center justify-center ${
                        loading ? "opacity-70 cursor-not-allowed" : ""
                      }`}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <>
              <FiLoader className="animate-spin mr-2" /> {/* Spinner */}
              Loading...
            </>
          ) : (
            "Get Started"
          )}
        </button>
      </div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black from-black to-grey-100 bg-opacity-75 z-50">
          <div className="loader"></div>
        </div>
      )}
      <div
        className="flex justify-start items-center mb-4 overflow-x-auto relative z-20 no-visible-scrollbar mt-5"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex items-center space-x-2 mr-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-1"
            >
              <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
              <path d="M15 12v-3"></path>
            </svg>
          </span>
          <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
            Next.js
          </span>
        </div>
        <div className="flex items-center space-x-2 mr-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-1"
            >
              <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
              <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
              <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
              <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
              <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
              <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
              <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
            </svg>
          </span>
          <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
            React
          </span>
        </div>
        <div className="flex items-center space-x-2 mr-4">
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-[0.5px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
            </svg>
          </span>
          <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
            TailwindCSS
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroText;

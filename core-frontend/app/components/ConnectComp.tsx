"use client";
import React from "react";
import { PinContainer } from "@/app/components/ui/3d-pin";

const ConnectCompo = () => {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/in.linkedin.com"
        href="https://linkedin.com/in/anurag--rajput"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Anurag
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">Wanna Connect, Hover on me.</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-500 via-blue-800 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
};

export default ConnectCompo;

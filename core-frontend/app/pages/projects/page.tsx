"use client";
import React from "react";
import UploadFile from "@/app/components/FileUpload";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import EditableTitle from "@/app/components/EditableTitle";
import "@/app/css/Input.css";
import Button from "@/app/components/Button";
import ProjectStack from "@/app/components/ProjectStack";
import {
  ProjectProvider,
  useProjectContext,
} from "@/app/contexts/ProjectContext";
import ProjectDescription from "@/app/components/ProjectDescription";
import { v4 as uuidv4 } from "uuid";

const SubmitButton = () => {
  const { handleSave } = useProjectContext();

  const handleSubmit = React.useCallback(() => {
    handleSave();
  }, [handleSave]);

  return <Button label="Submit" onClick={handleSubmit} />;
};

const Projects = () => {
  const uploadFileKeys = [...Array(5)].map(() => uuidv4());

  return (
    <ProjectProvider>
      <div className="grid grid-cols-4 h-screen bg-black p-4 relative">
        <BackgroundBeams />

        <div className="col-span-3 flex flex-col rounded-xl p-6 overflow-hidden shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <EditableTitle />
            <SubmitButton />
          </div>

          <div className="rounded-lg p-4 h-full ml-20 text-white">
            <ProjectStack />

            <ProjectDescription />
          </div>
        </div>

        <div className="absolute top-0 bottom-0 left-[74%] w-1 bg-gradient-to-b from-transparent via-gray-600 to-transparent z-0" />

        <div
          className="col-span-1 rounded-xl p-4 overflow-y-auto"
          style={{ maxHeight: "100vh" }}
        >
          {uploadFileKeys.map((key) => (
            <UploadFile key={key} />
          ))}
        </div>
      </div>
    </ProjectProvider>
  );
};

export default Projects;

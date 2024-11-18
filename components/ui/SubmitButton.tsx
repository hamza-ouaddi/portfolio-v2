import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative flex justify-center items-center gap-2 h-12 w-32 bg-gray-900 dark:bg-white dark:bg-opacity-10 text-white rounded-full outline-none transition-all border border-white dark:border dark:border-white/10 focus:scale-110 active:scale-105 hover:scale-110 hover:bg-gray-950 disabled:scale-100 disabled:opacity-75 disabled:hover:bg-gray-900 overflow-hidden"
    >
      <span className="absolute top-0 left-0 flex h-full w-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:w-full"></span>
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          <span className="group-hover:text-black z-10 ">Submit</span>
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
        </>
      )}
    </button>
  );
}

export default SubmitButton;

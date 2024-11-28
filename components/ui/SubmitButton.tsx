import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`group relative flex items-center justify-center gap-2 h-[calc(48px+8px)] overflow-hidden rounded-full transition-all w-fit text-white dark:text-white bg-gray-900 dark:bg-white/10 px-8 py-2 ${
        pending
          ? "bg-gray-500"
          : "bg-gray-900 focus:scale-[1.15] hover:scale-[1.10]"
      }`}
    >
      {pending ? (
        <>
          <span className="relative z-10 dark:group-hover:text-black transition-all leading-none">
            Sending
          </span>

          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        </>
      ) : (
        <>
          <span className="relative z-10 dark:group-hover:text-black transition-all leading-none">
            Submit
          </span>
          <div className="relative h-4 w-4 overflow-hidden z-10">
            <div className="absolute transition-all duration-200 group-hover:-translate-y-3 group-hover:translate-x-4 dark:group-hover:text-black">
              <FaPaperPlane className="opacity-70 h-3 w-3" />
              <FaPaperPlane className="opacity-70 -translate-x-4 h-3 w-3" />
            </div>
          </div>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-gray-700 dark:bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </>
      )}
    </button>
  );
}

export default SubmitButton;

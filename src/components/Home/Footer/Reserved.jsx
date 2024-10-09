import React from "react";

const Reserved = () => {
  return (
    <div className="flex lg:mx-14 lg:px-0 px-3 py-4 border-t border-neutral-800/90">
      <div className="flex justify-center lg:justify-between w-full">
        <p className="text-neutral-500 text-xs tracking-wide text-center">
          &copy; 2024 Elysium VR. All rights reserved. Coded by Mark Gariando
        </p>

        <div className="hidden lg:flex items-center lg:gap-2">
          <a href="#" className="text-neutral-500 text-xs tracking-wide">
            Privacy Policy
          </a>
          <span className="text-neutral-500"> • </span>
          <a href="#" className="text-neutral-500 text-xs tracking-wide">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reserved;

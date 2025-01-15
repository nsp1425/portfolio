import { cn } from "../../lib/utils";
import React from "react";

export const Meteors = ({ number, className }) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: Math.random() * window.innerHeight + "px", // Random vertical placement
            left: Math.random() * window.innerWidth + "px", // Random horizontal placement
            animationDelay: Math.random() * 1 + "s", // Slightly longer delays
            animationDuration: Math.random() * (10 - 5) + 5 + "s", // Slightly slower animations
          }}
        ></span>
      ))}
    </>
  );
};

import React from "react";

const Loader = () => {
  return (
    <div className="fixed z-50 left-0 right-0 top-0 bottom-0 bg-white/30 transition-colors backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2">
        <div className="absolute w-32 h-32">
          <div className="graphic"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

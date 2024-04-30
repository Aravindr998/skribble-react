import React from "react";

const GameBar = () => {
  return (
    <div className="w-full font-nunito bg-white rounded flex justify-between items-center">
      <div className="flex items-center text-xl font-bold ">
        <div className="w-auto inline-block relative">
          <img src="/assets/timer.gif" alt="timer" />
          <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-[40%]">
            <p>0</p>
          </div>
        </div>
        <p className="ml-3">Round 1 of 3</p>
      </div>
      <div>
        <p className="font-light">WAITING</p>
      </div>
      <div>
        <img
          src="/assets/settings.gif"
          alt="settings icon"
          className="scale-150 mr-3"
        />
      </div>
    </div>
  );
};

export default GameBar;

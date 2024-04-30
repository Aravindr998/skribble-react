import React from "react";

const Player = () => {
  return (
    <div className="flex justify-between items-center font-nunito bg-white rounded min-w-40 p-2">
      <div className="flex flex-col items-center">
        <p className="font-bold">#1</p>
        <img src="/assets/owner.gif" alt="owner" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-blue-400 font-bold">test (You)</p>
        <p className="text-sm">O points</p>
      </div>
    </div>
  );
};

export default Player;

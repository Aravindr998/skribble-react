import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../redux/slices/roomSlice";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { socket } from "../socket";

const Login = () => {
  const playerNameRef = useRef(null);
  const room = useSelector((state) => state.room);
  const navigate = useNavigate();
  const [error, setError] = useState({
    playerName: "",
    roomId: "",
  });

  useEffect(() => {
    if (!isEmpty(room.id)) {
      console.log("here");
      socket.connect();
      navigate(`/room/${room.id}`);
    }
  }, [room.id, navigate]);

  const dispatch = useDispatch();
  const handlePlay = () => {
    const playerName = playerNameRef.current.value;
    setError((prevState) => ({
      ...prevState,
      playerName: "",
    }));
    if (!playerName || !playerName.trim()) {
      setError((prevState) => ({
        ...prevState,
        playerName: "Player name cannot be empty",
      }));
    }
    dispatch(createRoom(playerName));
  };
  return (
    <div className="w-1/4 flex justify-center items-center bg-blue-900 bg-opacity-70">
      <div className="w-full p-3">
        <input
          type="text"
          placeholder="Enter your name"
          className={`w-full font-semibold focus:outline-none p-2 border ${
            error.playerName ? "border-red-600" : "border-blue-900"
          }`}
          ref={playerNameRef}
        />
        {!!error.playerName && (
          <p className="text-red-600">{error.playerName}</p>
        )}
        <button
          className="font-nunito font-bold text-3xl bg-green-600 hover:bg-green-700 text-white w-full my-4 py-4 transition-colors"
          onClick={handlePlay}
        >
          Play!
        </button>
      </div>
    </div>
  );
};

export default Login;

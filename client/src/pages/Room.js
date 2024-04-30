import React, { useEffect } from "react";
import GameBar from "../components/GameBar";
import Player from "../components/Player";
import GameDetails from "../components/GameDetails";
import { useParams } from "react-router-dom";
import { socket } from "../socket";
import { useSelector } from "react-redux";

const Room = () => {
  const { roomId } = useParams();
  const player = useSelector((state) => state.player);
  useEffect(() => {
    if (roomId && !socket.connected) {
      socket.connect();
    }
  }, [roomId]);

  useEffect(() => {
    function createSocketRoom() {
      const data = {
        player,
        roomId,
      };
      socket.emit("createRoom", data);
    }
    socket.on("connect", createSocketRoom);
    return () => {
      socket.off("connect", createSocketRoom);
    };
  }, [player, roomId]);

  return (
    <main className="bg-hero-pattern w-screen h-screen">
      <div className="flex justify-start items-center p-5">
        <img src="/assets/logo.gif" className="w-1/4" alt="logo" />
      </div>
      <div className="w-full px-5">
        <GameBar />
      </div>
      <div className="w-full px-5 flex pt-2">
        <div>
          <Player />
        </div>
        <div className="ml-2 w-2/4">
          <GameDetails />
        </div>
      </div>
    </main>
  );
};

export default Room;

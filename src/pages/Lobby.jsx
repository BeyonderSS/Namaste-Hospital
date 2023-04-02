import useSocket from "@/hooks/useSocket";
import React, { useState, useCallback } from "react";

const LobbyScreen = () => {
  const socket = useSocket();
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("roomName");
    },
    [email, room, socket]
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Lobby Screen</h1>
        <form onSubmit={handleSubmitForm}>
          <div className="mb-4">
            <label
              className="block font-semibold text-gray-800 mb-2"
              htmlFor="email"
            >
              Email Id
            </label>
            <input
              className="w-full border border-gray-400 py-2 px-3 rounded-md text-gray-800"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-semibold text-gray-800 mb-2"
              htmlFor="room"
            >
              Room Id
            </label>
            <input
              className="w-full border border-gray-400 py-2 px-3 rounded-md text-gray-800"
              type="text"
              id="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default LobbyScreen;

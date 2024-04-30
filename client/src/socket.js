import { io } from "socket.io-client";

console.log(process.env.NODE_ENV);

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:4000";

console.log(URL);
export const socket = io(URL, {
  autoConnect: false,
});

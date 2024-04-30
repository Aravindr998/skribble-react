import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "./socket";
import { useEffect } from "react";
import { setConnection } from "./redux/slices/socketSlice";

function App() {
  const loaderState = useSelector((state) => state.loader);
  const dispatch = useDispatch();
  useEffect(() => {
    function onConnect() {
      dispatch(setConnection(true));
    }
    function onDisconnect() {
      dispatch(setConnection(false));
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      {loaderState && <Loader />}
    </>
  );
}

export default App;

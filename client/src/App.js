import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";

function App() {
  const loaderState = useSelector((state) => state.loader);

  return (
    <>
      <RouterProvider router={router} />
      {loaderState && <Loader />}
    </>
  );
}

export default App;

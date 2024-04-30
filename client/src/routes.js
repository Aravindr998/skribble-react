import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Room from "./pages/Room";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/room/:roomId",
    element: <Room />,
  },
]);

export default router;

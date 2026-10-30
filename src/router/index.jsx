import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Music from "../pages/Music";
import ReleaseDetail from "../pages/ReleaseDetail";
import Merch from "../pages/Merch";
import Videos from "../pages/Videos";
import Shows from "../pages/Shows";
import Lab from "../pages/Lab";
import About from "../pages/About";
import Contact from "../pages/Contact";

import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/music", element: <Music /> },
      { path: "/music/:slug", element: <ReleaseDetail />,},
      { path: "/merch", element: <Merch /> },
      { path: "/videos", element: <Videos /> },
      { path: "/shows", element: <Shows /> },
      { path: "/lab", element: <Lab /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;

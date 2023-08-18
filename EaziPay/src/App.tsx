import { useState,  createContext } from "react";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Sidebar from "./components/Sidebar";
import Admin from "./pages/Admin";
import ErrorPage from "./components/ErrorPage";

export const ToggleContext = createContext(false);

const Layout = () => {
  const [toggle] = useState(false);
  return (
      <ToggleContext.Provider value={ toggle }>
        <Sidebar />
        <Outlet />
      </ToggleContext.Provider>
  )
}

function App() {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "*",
        element: <ErrorPage />
      },
      {
        path: "/admin",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Admin />
          },
          // {
          //   path: "admin",
          //   element: <Admin />
          // },
        ]
      }
    ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
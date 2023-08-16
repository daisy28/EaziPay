import { useState, useEffect, createContext, Dispatch, SetStateAction } from "react";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import LandingPage from "./pages/landingPage";


export type UserState = {
  setUsers: Dispatch<SetStateAction<never[]>>
};
const setState: UserState = {
  setUsers: state => state
};
export const UserContext = createContext({ users: [], setUsers: setState.setUsers});
export const ToggleContext = createContext(false);

const Layout = () => {
  const [toggle] = useState(false);
  // const [users, setUsers] = useState([]);
  // const lendsqrUsers = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;
  // useEffect(() => {
  //   axios
  //     .get(lendsqrUsers)
  //     .then((response) => {
  //       setUsers(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [lendsqrUsers]);

  return (
      <ToggleContext.Provider value={ toggle }>
        <LandingPage />
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
        path: "/dashboard",
        element: <Layout />,
        children: [
          // {
          //   index: true,
          //   element: <Users />
          // },
          // {
          //   path: "user-page",
          //   element: <UserPage />
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
import { useState, useContext } from "react";
import { ToggleContext } from "../App";
import Logo from "../Assets/Frame 48096238.png";

const Nav = () => {
  const toggle = useContext(ToggleContext);
  const [toggled, setToggled] = useState(toggle);

  return (
    <nav className={`fixed right-0 left-0 top-0 z-20 bg-white text-[1rem] font-[500] leading-[24px]`}>
      <div
        className={`flex justify-between items-start shadow-md p-4 md:items-center lg:px-8`}
      >
        <div>
          <img src={Logo} alt="Brand Logo" />
        </div>

        <div className={`md:hidden`}>
          <div
            className={` ${
              toggled ? `hidden` : `block`
            } text-[2rem] cursor-pointer`}
            onClick={() => setToggled((prevState) => !prevState)}
          >
            =
          </div>

          <div
            className={`${
              toggled
                ? `h-[100vh] bg-[#11453b78] fixed top-0 bottom-0 z-20 w-[100%] left-0`
                : `h-0 bg-transparent relative`
            }  `}
          >
            <div
              className={` ${
                toggled ? `block` : `hidden`
              } flex flex-col justify-start bg-slate-300 w-[60%] p-6 fixed right-0 bottom-0 top-0`}
            >
              <div className={`flex flex-col mb-4 gap-4 text-[#515251]`}>
                <div
                  className={`${
                    toggled ? `block` : `hidden`
                  } text-[2rem] cursor-pointer ml-auto `}
                  onClick={() => setToggled((prevState) => !prevState)}
                >
                  x
                </div>
                <a href="#">Individual</a>
                <a href="#">Business</a>
                <a href="#">Pricing</a>
                <a href="#">Set your payroll</a>
              </div>

              <div className={`flex flex-col gap-2 mt-[3rem]  text-[.8rem] font-[500] leading-[20px]`}>
                <button
                  className={`border border-[#11453b] p-3 text-green rounded-3xl`}
                >
                  Login
                </button>
                <button className={`p-3 text-white bg-[#11453b] rounded-3xl`}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`hidden md:block`}>
          <div
            className={`flex justify-between items-center text-[#515251] w-[100%] gap-4 md:gap-8`}
          >
            <div
              className={`${
                toggled ? `block` : `hidden`
              } text-[2rem] cursor-pointer ml-auto `}
              onClick={() => setToggled((prevState) => !prevState)}
            >
              x
            </div>
            <a href="#">Individual</a>
            <a href="#">Business</a>
            <a href="#">Pricing</a>
            <a href="#">Set your payroll</a>
          </div>
        </div>

        <div className={` text-[.8rem] font-[500] leading-[20px] gap-2 hidden md:flex`}>
          <button
            className={`border border-[#11453b] p-3 text-green rounded-2xl w-[90px] lg:w-[120px] lg:rounded-3xl`}
          >
            Login
          </button>
          <button
            className={`p-3 text-white bg-[#11453b] rounded-2xl w-[90px] lg:w-[120px] lg:rounded-3xl`}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

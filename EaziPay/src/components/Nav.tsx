import { useState, useContext } from "react";
import { ToggleContext } from "../App";
import Logo from "../Assets/Frame 48096238.png";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

const Nav = () => {
  const toggle = useContext(ToggleContext);
  const [toggled, setToggled] = useState(toggle);

  return (
    <nav className={`fixed right-0 left-0 top-0 z-40 bg-white text-[1rem] font-[500] leading-[24px] font-face-ae`}>
      <div
        className={`flex justify-between items-start shadow-md p-4 md:items-center lg:px-8`}
      >
        <div>
          <Link to="/">
            <img src={Logo} alt="Brand Logo" />
          </Link>
        </div>

        <div className={`md:hidden`}>
          <div
            className={` ${
              toggled ? `hidden` : `block`
            } text-[1.5rem] cursor-pointer text-[#11453b]`}
            onClick={() => setToggled((prevState) => !prevState)}
          >
            <RiMenu2Fill />
          </div>

          <div
            className={`${
              toggled
                ? `h-[100vh] bg-[#11453b78] fixed top-0 bottom-0 z-20 right-[190px] left-0`
                : `h-0 bg-transparent relative`
            }  `}
          >
            <div
              className={` ${
                toggled ? `block` : `hidden`
              } flex flex-col justify-start bg-white w-[190px] p-6 fixed right-0 bottom-0 top-0`}
            >
              <div className={`flex flex-col mb-4 gap-4 text-[#515251]`}>
                <div
                  className={`${
                    toggled ? `block` : `hidden`
                  } text-[1.5rem] cursor-pointer ml-auto text-[#11453b]`}
                  onClick={() => setToggled((prevState) => !prevState)}
                >
                  <AiOutlineClose />
                </div>
                <a href="#" className={`hover:text-[#ea4e4b]`}>Individual</a>
                <a href="#" className={`hover:text-[#ea4e4b]`}>Business</a>
                <a href="#" className={`hover:text-[#ea4e4b]`}>Pricing</a>
                <a href="#" className={`hover:text-[#ea4e4b]`}>Set your payroll</a>
              </div>

              <div className={`flex flex-col gap-2 mt-[3rem]  text-[.8rem] font-[500] leading-[20px]`}>
                <button
                  className={`border border-[#11453b] p-3 text-green rounded-3xl`}
                >
                  <Link to="/admin">
                    Login
                  </Link>
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
                toggled ? `block md:hidden` : `hidden`
              } text-[2rem] cursor-pointer ml-auto `}
              onClick={() => setToggled((prevState) => !prevState)}
            >
              x
            </div>
            <a href="#" className={`hover:text-[#ea4e4b]`}>Individual</a>
            <a href="#" className={`hover:text-[#ea4e4b]`}>Business</a>
            <a href="#" className={`hover:text-[#ea4e4b]`}>Pricing</a>
            <a href="#" className={`hover:text-[#ea4e4b]`}>Set your payroll</a>
          </div>
        </div>

        <div className={` text-[.8rem] font-[500] leading-[20px] gap-2 hidden md:flex`}>
          <button
            className={`border border-[#11453b] p-3 text-green rounded-2xl w-[90px] lg:w-[120px] lg:rounded-3xl`}
          >
            <Link to="/admin">
              Login
            </Link>
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

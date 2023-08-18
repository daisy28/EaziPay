import { useState, useContext } from "react";
import { ToggleContext } from "../App";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.css";
import Logo from "../Assets/EAZIPAY LOGO NEW 1.png";
import Arrow from "../Assets/Chevron_Right.png";
import Grid from "../Assets/Grid.png";
import Wallet from "../Assets/Wallet.png";
import Employee from "../Assets/user-plus (1).png";
import Payroll from "../Assets/Group 2 (1).png";
import Compliance from "../Assets/clipboard-document-check.png";
import Loan from "../Assets/Frame.png";
import Book from "../Assets/open book.png";
import Call from "../Assets/call.png";
import Settings from "../Assets/material-symbols_settings-outline.png";

const menuLinks = [
  {
    img: Grid,
    link: "Dashboard",
    route: "/admin"
  },
  {
    img: Wallet,
    link: "Wallet",
    route: "/wallet"
  },
  {
    img: Employee,
    link: "Employee Management",
    route: "/employee_management"
  },
  {
    img: Payroll,
    link: "Payroll",
    route: "/payroll"
  },
  {
    img: Compliance,
    link: "Compliance",
    route: "/compliance"
  },
  {
    img: Loan,
    link: "Quick Loan",
    route: "/quick_loan"
  },
  {
    img: Book,
    link: "Book Keeping",
    route: "/book_keeping"
  },
  {
    img: Call,
    link: "Support",
    route: "/support"
  },
  {
    img: Settings,
    link: "Settings",
    route: "/settings"
  },
]

const Sidebar = () => {
  const location = useLocation();
  const splitLocation = location.pathname;
  const toggle = useContext(ToggleContext);
  const [toggled, setToggled] = useState(toggle);

  return (
    <section className={`font-face-ae`}>
      <div
        className={`${
          toggled
            ? `h-[100vh] bg-[#11453b78] fixed bottom-0 top-[80px] w-[100%] z-20 md:bg-transparent`
            : `h-0 bg-transparent`
        }`}
      >
        <div
          className={`${style.scroll_style} ${
            toggled ? `w-[240px] z-50` : `w-[60px] md:w-[240px]`
          } bg-[#ffffff] shadow-lg fixed overflow-y-scroll overflow-x-hidden top-0 bottom-0 left-0 z-20 `}
        >
          <div
            className={`${
              toggled ? `left-[220px] rotate-[-90deg]` : `left-[40px]`
            } w-[25px] h-[25px]  text-primaryColor cursor-pointer fixed top-[100px] md:hidden`}
            onClick={() => setToggled((prevState) => !prevState)}
          >
            <img className={``} src={Arrow} alt="arrow" />
          </div>

          <div className={`${style.dashboard_background} mb-[4rem] w-[60px] md:w-full h-[80px] flex items-center justify-center md:h-[112px]`}>
            <div className={`p-4 relative`}>
               <img className={`relative z-40`} src={Logo} alt="" />
            </div>
          </div>

          <div>
            {menuLinks.map(menu => {
              return <div className={`py-4 cursor-pointer hover:border-l-4 hover:border-l-[#11453b] hover:bg-[#f0f7eb] ${menu.link === `Settings` ? `border-0` : `border-b border-[#e7e8e7]`} ${splitLocation === `${menu.route}` ? `border-l-4 border-l-[#11453b] bg-[#f0f7eb]` : ``}`} key={menu.link}>
                <div className={`${toggled ? `flex items-center gap-4` : `md:flex items-center gap-4`} px-4`}>
                  <Link to={menu.route}>
                    <img className={`hover:text-[#11453b]`} src={menu.img} alt="menu link icon" />
                  </Link>
                  <Link className={`${toggled ? `block` : `hidden md:block`} text-[#11453b] text-[1rem] font-[500] leading-[24px] `} to={menu.route}>{menu.link}</Link>

                  <div className={`ml-auto ${menu.link === `Dashboard` ? `hidden` : `block`} ${menu.link === `Wallet` ? `hidden` : `block`} ${menu.link === `Support` ? `hidden` : `block`}`}>
                    <img className={`${toggled ? `block` : `hidden md:block`}`} src={Arrow} alt="arrow" />
                  </div>
                </div>
                
              </div>
            })}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Sidebar;

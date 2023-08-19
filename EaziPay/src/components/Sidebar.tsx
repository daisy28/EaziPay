import { Link, useLocation } from "react-router-dom";
import style from "./style.module.css";
import Arrow from "../Assets/Chevron_Right.png";
import Grid from "../Assets/I974Z9.tif_1_.svg";
import Wallet from "../Assets/Wallet.svg";
import Employee from "../Assets/user-plus.svg";
import Payroll from "../Assets/Group 2.svg";
import Compliance from "../Assets/clipboard-document-check.svg";
import Loan from "../Assets/Frame.svg";
import Book from "../Assets/open book.svg";
import Call from "../Assets/call.svg";
import Settings from "../Assets/material-symbols_settings-outline.svg";
import Logo from "../Assets/Frame 48096183.svg";

const menuLinks = [
  {
    img: Grid,
    link: "Dashboard",
    route: "/admin"
  },
  {
    img: Wallet,
    link: "Wallet",
    route: "/admin/wallet"
  },
  {
    img: Employee,
    link: "Employee Management",
    route: "/admin/employee"
  },
  {
    img: Payroll,
    link: "Payroll",
    route: "/admin/payroll"
  },
  {
    img: Compliance,
    link: "Compliance",
    route: "/admin/compliance"
  },
  {
    img: Loan,
    link: "Quick Loan",
    route: "/admin/quick_loan"
  },
  {
    img: Book,
    link: "Book Keeping",
    route: "/admin/book_keeping"
  },
  {
    img: Call,
    link: "Support",
    route: "/admin/support"
  },
  {
    img: Settings,
    link: "Settings",
    route: "/admin/settings"
  },
]

const Sidebar = () => {
  const location = useLocation();
  const splitLocation = location.pathname;

  return (
    <section className={`font-face-ae`}>
        <div
          className={`${style.scroll_style} bg-[#ffffff] w-full md:w-[240px] shadow-lg fixed md:overflow-y-scroll md:overflow-x-hidden overflow-x-scroll md:top-0 bottom-[-5px] md:bottom-0 left-0 right z-20`}
      >
        
          <div className={`relative hidden md:block mb-[2.5rem] `}>
            <img className={`relative z-40 h-full w-[239px] object-cover`} src={Logo} alt="" />
          </div>
        
          <div className={`flex md:block`}>
            {menuLinks.map(menu => {
              return <div className={`py-4 cursor-pointer hover:border-b-4 hover:border-b-[#11453b] md:hover:border-l-4  md:hover:border-l-[#11453b] md:hover:border-0 hover:bg-[#f0f7eb] ${menu.link === `Settings` ? `md:border-0` : `md:border-b md:border-b-[#e7e8e7]`} ${splitLocation === `${menu.route}` ? `border-b-4 md:border-l-4 border-b-[#11453b] md:border-l-[#11453b] bg-[#f0f7eb] text-[#11453b]` : ``}`} key={menu.link}>
                <div className={`md:flex gap-4 items-center px-4`}>
                  <Link className={`w-[25px] h-[25px] block`} to={menu.route}>
                    <img className={`hover:text-[#11453b] w-[25px] h-[25px] ${splitLocation === `${menu.route}` ? ` text-[#11453b] hover:text-[#11453b]` : ``}`} src={menu.img} alt="menu link icon" />
                  </Link>
                  <Link className={`text-[#515251] hover:text-[#11453b] text-[1rem] font-[500] leading-[24px] hidden md:block`} to={menu.route}>{menu.link}</Link>

                  <div className={`ml-auto ${menu.link === `Dashboard` ? `hidden md:hidden` : `block`} ${menu.link === `Wallet` ? `hidden md:hidden` : `block`} ${menu.link === `Support` ? `hidden` : `hidden md:block`}`}>
                    <img className={``} src={Arrow} alt="arrow" />
                  </div>
                </div>
                
              </div>
            })}
          </div>


        </div>
    </section>
  );
};

export default Sidebar;

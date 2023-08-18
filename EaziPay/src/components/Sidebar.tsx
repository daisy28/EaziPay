import { Link, useLocation } from "react-router-dom";
import style from "./style.module.css";
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
import Logo from "../Assets/EAZIPAY LOGO NEW 1.png";
// import { GoHomeFill } from "react-icons/go";


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
    route: "/admin/employee_management"
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
        <div className={`${style.dashboard_background} hidden w-full md:flex items-center justify-center h-[95px] mb-[2.5rem]`}>
            <div className={`p-4 relative`}>
               <img className={`relative z-40`} src={Logo} alt="" />
            </div>
        </div>
        
          <div className={`flex md:block`}>
            {menuLinks.map(menu => {
              return <div className={`py-4 cursor-pointer hover:border-b-4 hover:border-b-[#11453b] md:hover:border-l-4  md:hover:border-l-[#11453b] md:hover:border-0 hover:bg-[#f0f7eb] ${menu.link === `Settings` ? `md:border-0` : `md:border-b md:border-b-[#e7e8e7]`} ${splitLocation === `${menu.route}` ? `border-b-4 md:border-l-4 border-b-[#11453b] md:border-l-[#11453b] bg-[#f0f7eb]` : ``}`} key={menu.link}>
                <div className={`md:flex gap-4 items-center px-4`}>
                  <Link className={`w-[25px] h-[25px] block`} to={menu.route}>
                    <img className={`hover:text-[#11453b] w-[25px] h-[25px]`} src={menu.img} alt="menu link icon" />
                  </Link>
                  <Link className={` text-[#11453b] text-[1rem] font-[500] leading-[24px] hidden md:block`} to={menu.route}>{menu.link}</Link>

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

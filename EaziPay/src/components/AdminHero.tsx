import CompanyLogo from "../Assets/Company Logo.png";
import Admin from "../Assets/Ellipse 12.png";
import { BsBell } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import Arrow from "../Assets/Chevron_Right.png";
import style from "./style.module.css";
import Employee from "../Assets/Frame 27401.png";
import Salary from "../Assets/Frame 27402.png";
import Pay from "../Assets/Frame 48095759.png";
import Loan from "../Assets/Frame 48095757.png";
import Calendar from "../Assets/calendar.png";

const cards = [
  {
    img: Employee,
    action: "Add Employee",
  },
  {
    img: Salary,
    action: " Pay Salaries",
  },
  {
    img: Pay,
    action: "Pay Compliance",
  },
  {
    img: Loan,
    action: "Quick Loan",
  },
];

const AdminHero = () => {
  return (
    <section>
      <div>
        <div
          className={`bg-[#fff] p-4 flex justify-between items-center shadow-sm fixed right-0 top-0 left-[60px] md:left-[240px] z-20`}
        >
          <div>
            <img className={`w-[40px] md:w-[150px]`} src={CompanyLogo} alt="" />
          </div>

          <div className={`flex items-center md:w-[400px] justify-end`}>
            <div className={`relative cursor-pointer w-[16px] h-[16px] `}>
              <BsBell />
              <div
                className={`absolute top-[-6px] right-[-5px] w-[12px] h-[12px] text-[.5rem] rounded-full text-white p-1 bg-[#c92f02] flex justify-center items-center`}
              >
                7
              </div>
            </div>

            <div className={`flex gap-2 items-center ml-6 md:gap-4`}>
              <img
                className={`w-[40px] h-[40px] md:w-[80px] md:h-[80px]`}
                src={Admin}
                alt=""
              />
              <div className={`flex gap-2 flex-col`}>
                <h2
                  className={`font-[700] text-[.8rem] md:text-[1rem] leading-[24px] text-[#2b2b2b]`}
                >
                  Kalu Abasiama
                </h2>
                <p
                  className={`font-[500] text-[.6rem] md:text-[.8rem] leading-[16px] text-[#898989]`}
                >
                  Admin
                </p>
              </div>
              <div className={`mt-auto rotate-[-90deg] cursor-pointer`}>
                <img className={`md:w-[25px]`} src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bg-[#fff] mt-[3rem] absolute p-4 right-0 top-[80px] left-[60px] md:left-[240px] z-10`}
        >
          <div>
            <div className={`text-left mb-10`}>
              <h1
                className={`font-[700] text-[2rem] leading-[48px] text-[#292a29] mb-4`}
              >
                Welcome Abasiama
              </h1>
              <p
                className={`font-[500] text-[1rem] leading-[24px] text-[#515251]`}
              >
                Pay and manage your employee in minutes
              </p>
            </div>
            <div className={`flex gap-10 flex-col lg:flex-row`}>

              <div className={`lg:w-[70%]`}>
                <div
                className={`${style.wallet_balance} p-6 flex flex-col gap-5 border border-[#e7e8e7] rounded-[24px] shadow-md md:flex-row md:justify-between md:items-end mb-8`}
              >
                <div>
                  <h3
                    className={`font-[500] text-[1rem] leading-[24px] text-[#d9ebcd] mb-6`}
                  >
                    Wallet Balance
                  </h3>
                  <div className={`flex gap-2 items-center`}>
                    <p
                      className={`font-[700] text-[1.5rem] md:text-[2rem] leading-[24px] text-[#fff]`}
                    >
                      N12,560,078.00
                    </p>
                    <BsEye className={`text-white`} />
                  </div>
                </div>

                <div className={`my-6 md:my-0`}>
                  <button
                    className={`p-3 rounded-[24px] bg-[#d9ebcd] w-[132px] text-[.8rem] font-[500] leading-[20px] text-[#11453b]`}
                  >
                    Fund Wallet
                  </button>
                </div>
              </div>
              
              <div className={`flex gap-6 flex-col md:flex-row`}>
                {cards.map((card) => {
                  return (
                    <div
                      className={`rounded-[24px] shadow-lg p-6 border border-[#e7e8e7] flex flex-col gap-6 items-center justify-center w-[168.5px] mx-auto`}
                      key={card.action}
                    >
                      <img
                        className={`w-[48px] h-[48px]`}
                        src={card.img}
                        alt=""
                      />
                      <p
                        className={`font-[500] text-[.8rem] leading-[1rem] text-[#515251]`}
                      >
                        {card.action}
                      </p>
                    </div>
                  );
                })}
              </div>
                
              </div>

              

              

              <div
                className={`rounded-[24px] shadow-lg border border-[#e7e8e7] lg:w-[188px] mx-auto`}
              >
                <h1
                  className={`bg-[#d9ebcd] rounded-t-[1rem] p-4 text-center text-[1rem] font-[700] leading-[24px]`}
                >
                  Next Payroll
                </h1>
                <div className={`p-4 py-8 flex flex-col gap-8 border-b border-[#95979556]`}>
                  <div className={`flex gap-2 justify-center`}>
                    <img src={Calendar} alt="" />
                    <span
                      className={`font-[400] text-[.6rem] leading-[1rem] text-[#515251]`}
                    >
                      Friday
                    </span>
                  </div>
                  <div>
                    <p
                      className={`font-[700] text-[1.2rem] leading-[24px] text-[#515251] text-center`}
                    >
                      09/11/2022
                    </p>
                  </div>
                </div>

                <div className={`p-4 py-8 flex flex-col gap-4`}>
                  <div>
                    <p
                      className={`font-[500] text-[1rem] leading-[24px] text-[#515251] text-left mb-6`}
                    >
                      Total Employee
                    </p>
                    <p className={`font-[700] text-[2rem] leading-[40px] text-[#292a29] text-left`}>64</p>
                  </div>
                  
                  <div className={`flex`}>
                    <div className={``}>
                      <div className={`w-[78px] h-[8px] bg-[#11453b]`}></div>
                      <p className={`mt-2`}>Male</p>
                      <p>32</p>
                    </div>
                    <div>
                      <div className={`w-[78px] h-[8px] bg-[#ea4e4b]`}></div>
                      <p className={`mt-2`}>Female</p>
                      <p>32</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHero;

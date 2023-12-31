import { BsEye } from "react-icons/bs";
import style from "./style.module.css";
import Employee from "../Assets/Frame 27401.svg";
import Salary from "../Assets/Frame 27402.svg";
import Pay from "../Assets/Frame 48095759.svg";
import Loan from "../Assets/Frame 48095757.svg";
import Calendar from "../Assets/calendar.png";
import AdminNav from "./AdminNav";

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
    <section className={`bg-[#f9fafc]`}>
        <AdminNav />
        <div
          className={`mt-[3rem] p-4 relative top-[60px] right-0 mb-[5rem]`}
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
                className={`${style.wallet_balance} p-6 flex flex-col gap-5 border border-[#e7e8e7] lg:py-[3.5rem] lg:mb-[3.5rem] rounded-[24px] shadow-md md:flex-row md:justify-between md:items-end mb-8`}
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
                    className={`p-3 rounded-[24px] bg-[#d9ebcd] w-[132px] text-[.8rem] font-[500] leading-[20px] text-[rgb(17,69,59)] hover:bg-white hover:ease-in-out hover:delay-150 hover:duration-300 hover:transition`}
                  >
                    Fund Wallet
                  </button>
                </div>
              </div>
              
              <div className={`flex gap-6 flex-wrap md:flex-row md:flex-nowrap`}>
                {cards.map((card) => {
                  return (
                    <div
                      className={`rounded-[24px] shadow-lg p-6 border border-[#e7e8e7] flex flex-col gap-6 items-center justify-center w-[150px] mx-auto cursor-pointer hover:bg-[#f0f7eb] hover:ease-in-out hover:delay-150 hover:duration-300 hover:transition`}
                      key={card.action}
                    >
                      <img
                        className={`w-[48px] h-[48px]`}
                        src={card.img}
                        alt=""
                      />
                      <p
                        className={`font-[500] text-[.8rem] leading-[1rem] text-[#515251] text-center`}
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
    </section>
  );
};

export default AdminHero;

import User from "../Assets/Ellipse 30.png";
import { BsBell, BsEye } from "react-icons/bs";
import style from "./style.module.css";
import Money from "../Assets/Frame 27402.png";
import Employee from "../Assets/Frame 27401.png";
import Payslip from "../Assets/Frame 48095756.png";
import Salary from "../Assets/Frame 48095758.png";
import Loan from "../Assets/Frame 48095757.png";
import Transfer from "../Assets/Frame 48095759.png";
import Airtime from "../Assets/Group 948.png";
import Data from "../Assets/Group 949.png";
import Electricity from "../Assets/Group 951.png";

const data = [
  {
    img: Money,
    title: "Pay Salaries",
  },
  {
    img: Employee,
    title: "Add Employee",
  },
  {
    img: Payslip,
    title: "Send Payslips",
  },
  {
    img: Salary,
    title: "Edit Salaries",
  },
  {
    img: Loan,
    title: "Get a Loan",
  },
  {
    img: Transfer,
    title: "Make a Transfer",
  },
  {
    img: Airtime,
    title: "Airtime",
  },
  {
    img: Data,
    title: "Data",
  },
  {
    img: Electricity,
    title: "Electricity",
  },
];

const Wallet = () => {
  return (
    <section className={`${style.resize_width} p-4 mb-10 md:px-8 lg:px-[5rem]`}>
      <div>
        <div
          className={`flex justify-between items-center mb-8 fixed z-20 bg-white top-0 right-0 left-0 md:left-[240px] p-4 shadow-sm`}
        >
          <div className={`flex gap-4 items-center`}>
            <img src={User} alt="" />
            <span
              className={`text-[1.3rem] font-[500] leading-[2rem] text-[#515251]`}
            >
              Hello Wasiu
            </span>
          </div>
          <div
            className={`w-[44px] h-[44px] rounded-[12px] p-2 bg-[#f2f1f1] flex justify-center items-center relative cursor-pointer`}
          >
            <BsBell />
            <div
              className={`absolute top-[15px] right-[15px] w-[7px] h-[7px] rounded-full bg-[#ea4e4b]`}
            ></div>
          </div>
        </div>

        <div className={`relative top-[100px]`}>
          <div
            className={`flex flex-col justify-start gap-4 lg:gap-6 mb-8 relative`}
          >
            <div
              className={`${style.wallet_balance} p-6 flex flex-col gap-5 border border-[#e7e8e7] lg:p-[2rem] lg:mb-0 rounded-[24px] shadow-md md:flex-row md:justify-between md:items-end mb-8`}
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
                  className={`p-3 rounded-[24px] bg-[#d9ebcd] w-[132px] text-[.8rem] font-[500] leading-[20px] text-[rgb(17,69,59)]`}
                >
                  Fund Wallet
                </button>
              </div>
            </div>

            <div className={`mb-8 lg:mb-0`}>
              <h2
                className={`font-[500] text-[.8rem] leading-[1rem] space-[8%] text-[#515251] uppercase mb-8`}
              >
                quick stats
              </h2>
              <div className={`flex gap-4 mx-auto md:justify-start lg:gap-2`}>
                <div
                  className={`w-[155px] md:w-[200px] lg:w-[155px] rounded-[16px] p-4 px-5 bg-[#f2f1f1] flex flex-col gap-4`}
                >
                  <h3
                    className={`font-[400] text-[.8rem] leading-[20px] space-[.25px] text-[#515251]`}
                  >
                    Total Payroll
                  </h3>
                  <p
                    className={`font-[700] text-[.8rem] leading-[20px] space-[.25px] text-[#515251]`}
                  >
                    N 2,293,044,345.05
                  </p>
                </div>
                <div
                  className={`w-[155px] md:w-[200px] lg:w-[155px] rounded-[16px] p-4 px-5 bg-[#f2f1f1] flex flex-col gap-4`}
                >
                  <h3
                    className={`font-[400] text-[.8rem] leading-[20px] space-[.25px] text-[#515251]`}
                  >
                    Total Employee
                  </h3>
                  <p
                    className={`font-[700] text-[.8rem] leading-[20px] space-[.25px] text-[#515251]`}
                  >
                    10,000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`mb-[12rem]`}>
            <h2
              className={`font-[500] text-[.8rem] leading-[1rem] space-[8%] text-[#515251] uppercase mb-8`}
            >
              quick actions
            </h2>
            <div
              className={`rounded-[24px] border border-[#e7e8e7] p-4 grid grid-cols-3 gap-4 md:w-[412px] lg:w-[460px]`}
            >
              {data.map((item) => {
                return (
                  <div
                    key={item.title}
                    className={`flex flex-col gap-3 cursor-pointer`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className={`md:w-[60px] md:h-[60px]`}
                    />
                    <p
                      className={`font-[500] text-[.7rem] text-center md:text-left leading-[1rem] space-[.25px] text-[#515251]`}
                    >
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;

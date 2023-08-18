import CompanyLogo from "../Assets/Company Logo.png";
import Admin from "../Assets/Ellipse 12.png";
import { BsBell } from "react-icons/bs";
import Arrow from "../Assets/Chevron_Right.png";

const AdminNav = () => {
  return (
    <div
      className={`bg-[#fff] p-4 flex justify-between items-center shadow-md fixed right-0 top-0 left-[60px] md:left-[240px] z-20 font-face-ae`}
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
  );
};

export default AdminNav;

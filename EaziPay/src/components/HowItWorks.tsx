import Bg from "../Assets/BG.png";
import Phone from "../Assets/payroll-a1eb8ce0.gif";
import Mask1 from "../Assets/Mask group3.png";
import Mask2 from "../Assets/Mask group4.png";

const HowItWorks = () => {
  return (
    <section className={`p-4 mb-8 mt-6 lg:px-8 font-face-ae`}>
     <div className={`my-[5rem] text-center`}>
          <h1 className={`font-[500] text-[2.5rem] leading-[54px] text-[#11453b] md:leading-[64px] md:text-[3.8rem] mb-6`}>How EaziPay Works</h1>
          <p className={`font-[400] text-[1.5rem] leading-[36px] text-[#515251] mb-8`}>Get started in 3 simple steps</p>
     </div>
      <div className={`md:flex justify-between items-center`}>
        <div
          className={`relative mb-12 md:mb-0 md:w-[450px] xl:w-[700px] flex justify-center`}
        >
          <img src={Bg} alt="" />
          <img className={`absolute top-0 w-[50%] rounded-[20px]`} src={Phone} alt="" />
        </div>

        <div>
          <div className={`flex`}>
            <img src={Mask1} alt="" />
            <div className={`flex flex-col gap-4 `}>
              <div
                className={`flex justify-center items-center w-[64px] h-[64px] rounded-2xl text-[2rem]font-[700] leading-[48px] gap-4 bg-[#11453b] text-white`}
              >
                1
              </div>
              <p
                className={`font-[700] text-[1.2rem] leading-[24px] text-[#515251]`}
              >
                Create your free account
              </p>
              <p
                className={`font-[400] text-[1rem] leading-[24px] text-[#515251]`}
              >
                Click here to set up your EaziPay account
              </p>
            </div>
          </div>

          <div className={`flex`}>
            <div className={`flex flex-col gap-4 relative p-4`}>
              <div
                className={`flex justify-center items-center w-[64px] h-[64px] rounded-2xl text-[2rem] font-[700] leading-[48px] gap-4 bg-[#f2f1f1] text[#11453b] absolute top-[-30px] left-[60px]`}
              >
                2
              </div>
              <p
                className={`font-[700] text-[1.2rem] leading-[24px] text-[#515251] mt-8`}
              >
                Add Employee Data
              </p>
              <p
                className={`font-[400] text-[1rem] leading-[24px] text-[#515251]`}
              >
                Your employee information is 100% safe and secure
              </p>
            </div>
            <img
              className={`w-[200px] h-[200px] absolute z-[-10] right-[15px] lg:w-[300px] lg:right-[45px]`}
              src={Mask2}
              alt=""
            />
          </div>

          <div className={`flex`}>
            <div className={`flex flex-col gap-4 relative p-4 py-[4rem] lg:py-[5rem]`}>
              <div
                className={`flex justify-center items-center w-[64px] h-[64px] rounded-2xl text-[2rem] font-[700] leading-[48px] gap-4 bg-[#f2f1f1] text[#11453b] absolute top-0 left-[60px] lg:top-[25px]`}
              >
                3
              </div>
              <p
                className={`font-[700] text-[1.2rem] leading-[24px] text-[#515251] mt-8`}
              >
                Prepare your Transaction
              </p>
              <p
                className={`font-[400] text-[1rem] leading-[24px] text-[#515251]`}
              >
                Run payroll: Bulk Salaries and Compliance are done at once!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import CtaImg from "../Assets/Frame 48096458.png";
import Apple from "../Assets/Group 36028.png";
import Google from "../Assets/Group 36026.png";
import Frame from "../Assets/Frame 25.png";
import style from "./style.module.css";

const Cta = () => {
  return (
    <section className={`${style.cta_background} p-4 bg-[#ffe9e7] relative mb-8 py-[4rem] lg:px-8 md:mt-[10rem] font-face-ae`}>
      <div>
        <img
          className={`absolute top-0 md:left-[40px] lg:left-[60px]`}
          src={Frame}
          alt="Frame"
        />
      </div>
      <div
        className={`flex flex-col md:flex-row md:my-[7rem] md:justify-between md:items-center`}
      >
        <div className={`order-1 relative md:w-[50%]`}>
          <div className={`text-center lg:px-8`}>
            <h1
              className={`font-[700] text-[2.4rem] leading-[52px] text-[#292a29] md:text-[3rem] md:leading-[62px] md:text-left lg:text-[4rem] lg:leading-[72px]`}
            >
              Free forever for your{" "}
              <span className={` text-[#ea4e4b]`}> salary payment</span>
            </h1>
            <div>
              <p
                className={`font-[400] text-[1.2rem] leading-[28px] text-[#515251] mt-8 md:text-left`}
              >
                Subscribe to the Eazylife today
              </p>
            </div>
            <div className={`mt-[3.5rem]`}>
              <div
                className={`flex justify-center items-center gap-2 md:gap-4 md:justify-start`}
              >
                <div
                  className={`bg-white shadow-md w-[177px] h-[72px] flex justify-between items-center p-2 rounded-lg cursor-pointer relative z-20 gap-2`}
                >
                  <img className={`w-[40px] h-[40px]`} src={Apple} alt="Apple Icon" />
                  <div>
                    <p
                      className={`font-[500] text-[.7rem] leading-[16px] text-[#515251] text-left`}
                    >
                      Download on the{" "}
                      <span
                        className={`font-[700] text-[1rem] leading-[24px] text-[#515251]`}
                      >
                        Appstore
                      </span>
                    </p>
                  </div>
                </div>

                <div
                  className={`bg-white shadow-md w-[177px] h-[72px] flex justify-between items-center p-2 rounded-lg cursor-pointer relative z-20 gap-2`}
                >
                  <img className={`w-[40px] h-[40px]`} src={Google} alt="Google Icon" />
                  <div>
                    <p
                      className={`font-[500] text-[.7rem] leading-[16px] text-[#515251] text-left`}
                    >
                      Get on{" "}
                      <span
                        className={`font-[700] text-[1rem] leading-[24px] text-[#515251]`}
                      >
                        Google Play
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`order-0 w-[100%] relative md:order-2 mt-[4.8rem] md:mt-0`}
        >
          <img
            className={`w-[100%] h-[100%] relative object-cover mb-8`}
            src={CtaImg}
            alt="Cta Img"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;

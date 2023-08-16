import HeroImg from "../Assets/Frame 48096487.png";
import Apple from "../Assets/Group 36028.png";
import Google from "../Assets/Group 36026.png";

const Hero = () => {
  return (
    <section className={`relative mb-8`}>
      <div className={`flex flex-col md:flex-row`}>
        <div
          className={`order-1 relative top-[-50px] md:absolute md:w-[50%] md:top-[120px]`}
        >
          <div className={`p-4 text-center lg:px-8`}>
            <h1
              className={`font-[700] text-[2.4rem] leading-[52px] text-[#292a29] md:text-[3rem] md:leading-[62px] md:text-left lg:text-[4rem] lg:leading-[72px]`}
            >
              Run your payroll <span className={`text-[#b4a572]`}>easily</span>{" "}
              in <span className={` text-[#ea4e4b]`}>seconds</span>
            </h1>
            <div>
              <p
                className={`font-[400] text-[1.2rem] leading-[28px] text-[#515251] mt-8 md:text-left`}
              >
                We've built an all-inclusive simple solution for individual and
                businesses to manage staff, pay salaries, bills and relevant
                taxes all at once.
              </p>
            </div>
            <div className={`mt-8 md:w-[280px]`}>
              <button
                className={`bg-[#11453b] rounded-3xl p-4 px-8 w-[272px] text-center text-white font-[500] text-[1rem] leading-[24px]`}
              >
                Start Using Free, Forever
              </button>
            </div>
            <div className={`mt-[3.5rem]`}>
              <h3
                className={`font-[600] text-[1.1rem] leading-[24px] text-black mb-4 md:text-left`}
              >
                Download the Eazipay App
              </h3>

              <div
                className={`flex justify-center items-center gap-2 md:gap-4 md:justify-start`}
              >
                <div
                  className={`bg-white shadow-md w-[177px] flex justify-between items-center p-2 rounded-lg cursor-pointer`}
                >
                  <img src={Apple} alt="Apple Icon" />
                  <div>
                    <p
                      className={`font-[500] text-[.7rem] leading-[16px] text-[#515251]`}
                    >
                      Download on the{" "}
                      <span
                        className={`font-[700] text-[1.1rem] leading-[24px] text-[#515251]`}
                      >
                        Appstore
                      </span>
                    </p>
                  </div>
                </div>

                <div
                  className={`bg-white shadow-md w-[177px] flex justify-between items-center p-2 rounded-lg cursor-pointer`}
                >
                  <img src={Google} alt="Google Icon" />
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
          className={`order-0 w-[100%] relative z-0 left-0 right-0 md:order-2 top-[70px]`}
        >
          <img
            className={`w-[100%] h-[100%] relative z-[-10] left-0 object-cover`}
            src={HeroImg}
            alt="Hero Img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

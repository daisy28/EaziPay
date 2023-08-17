import Logo from "../Assets/EAZIPAY LOGO NEW 1 (1).png";
import Instagram from "../Assets/Instagram.png";
import Twitter from "../Assets/Twitter.png";
import LinkedIn from "../Assets/Frame 48096461.png";
import Facebook from "../Assets/Frame 48096462.png";
import Send from "../Assets/send.png";

const Footer = () => {
  return (
    <footer className={`p-8`}>
      <div
        className={`flex flex-col md:flex-row md:justify-between md:items-start gap-4`}
      >
        <div className={`mb-10 md:mb-0 order-8 md:order-[-1]`}>
          <div className={`mb-6`}>
            <img src={Logo} alt="" />
          </div>

          <div className={`mb-8`}>
            <p
              className={`font-[400] text-[.8rem] leading-[1.3rem] text-[#515251] mb-4`}
            >
              Copyright &copy; 2023 EaziPay.{" "}
            </p>
            <p
              className={`font-[400] text-[.8rem] leading-[1.3rem] text-[#515251]`}
            >
              All rights reserved.
            </p>
          </div>

          <div className={`flex justify-between items-center gap-4 w-[25%]`}>
            <img className={`cursor-pointer`} src={Instagram} alt="" />
            <img className={`cursor-pointer`} src={Twitter} alt="" />
            <img className={`cursor-pointer`} src={LinkedIn} alt="" />
            <img className={`cursor-pointer`} src={Facebook} alt="" />
          </div>
        </div>

        <div
          className={`flex flex-col gap-6 font-[400] text-[1rem] leading-[24px] text-[#7c7c7c] mb-10 md:mb-0`}
        >
          <h1
            className={`font-[500] text-[1.3rem] leading-[24px] text-[#292a29] `}
          >
            Product
          </h1>
          <a href="#">Individual</a>
          <a href="#">Businesses</a>
          <a href="#">Request Demo</a>
          <a href="#">Pricing</a>
        </div>

        <div
          className={`flex flex-col gap-6 font-[400] text-[1rem] leading-[24px] text-[#7c7c7c] mb-10 md:mb-0`}
        >
          <h1
            className={`font-[500] text-[1.3rem] leading-[24px] text-[#292a29] `}
          >
            Legal
          </h1>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

        <div
          className={`flex flex-col gap-6 font-[400] text-[1rem] leading-[24px] text-[#7c7c7c] mb-10 md:mb-0`}
        >
          <h1
            className={`font-[500] text-[1.3rem] leading-[24px] text-[#292a29] `}
          >
            Resources
          </h1>
          <a href="#">Faqs</a>
          <a href="#">Blog</a>
          <a href="#">Career</a>
          <a href="#">Customer Stories</a>
        </div>

        <div
          className={`flex flex-col gap-6 font-[400] text-[1rem] leading-[24px] text-[#7c7c7c] mb-10 md:mb-0`}
        >
          <h1
            className={`font-[500] text-[1.3rem] leading-[24px] text-[#292a29] `}
          >
            Contact us
          </h1>
          <a href="#">eazipay@gmail.com</a>
          <p>+234 816 878 9518</p>
          <div className={`relative`}>
            <input
              className={`bg-[#f2f1f1] rounded-[10px] p-4 px-6 text-[.8rem] font-[400] leading-[1.2rem] w-full outline-none`}
              placeholder="Your email address"
              type="text"
            />
            <img
              src={Send}
              alt="Send btn"
              className={`absolute right-[20px] top-[15px] cursor-pointer`}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

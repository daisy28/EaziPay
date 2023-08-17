import style from "./style.module.css";
const data = [
  {
    title: "Payroll in Seconds",
    description: `Never again will you spend more than 2 minutes on payroll. 
          
          Just click on your staff and bulk pay them at once. 
          
          Payment is done permanently.`,
  },
  {
    title: "All Payroll, Anytime Anywhere",
    description: `Whereever you are EaziPay has got you covered on ALL your Payroll tasks.
          
          Whether it is Taxex, Pension insurances, HMOs, trustfunds, EaziPay handle all your compliances in one place and easily, in seconds!`,
  },
  {
    title: "Tamper-proof Payroll for Life",
    description: `Your staff payroll history is kept in one place forever.
          
          No more excel sheet or manual records.
          
          Download your payroll history anytime you need it.`,
  },
];

const BrandInfo = () => {
  return (
    <section
      className={`${style.brand_background} p-4 mb-8 py-8 pb-[6rem] mt-[4rem] md:mt-[6rem] md:pt-[6rem] lg:px-8`}
    >
      <div className={`relative`}>
        <div className={``}>
          <h1
            className={`font-[500] text-[2rem] text-center text-[#11453b] leading-[40px] md:leading-[64px] md:text-[4rem] mb-4`}
          >
            For Individuals and Businesses
          </h1>
          <p
            className={`font-[400] text-[1.1rem] leading-[24px] text-center mb-10`}
          >
            Join 200+ businesses using EaziPay's easy solution.
          </p>
        </div>

        <div
          className={`mb-10 flex flex-col gap-4 md:flex-row md:justify-center lg:gap-0 w-[90%] mx-auto`}
        >
          {data.map((item, id) => {
            return (
              <div
                className={`${
                  style.cards
                } bg-[#11453b] p-6 rounded-xl shadow-md text-left flex flex-col gap-6 mt-4 relative ${
                  id === 0 ? `lg:z-10 lg:right-[-60px]` : ``
                } ${id === 1 ? `lg:z-10 lg:right-[10px]` : ``} ${
                  id === 2 ? `lg:z-20 lg:right-[60px]` : ``
                }`}
              >
                <h2
                  className={`font-[700] text-[1.8rem] leading-[36px] text-white`}
                >
                  {item.title}
                </h2>
                <p
                  className={`font-[400] text-[1.1rem] leading-[32px] text-white`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`md:w-[75%] lg:w-[50%] mx-auto`}>
          <p
            className={`font-[400] text-[1.2rem] leading-[24px] text-center text-[#515251] pb-8`}
          >
            We're happy to answer your queries. Please, reach us at{" "}
            <span className={`text-[#ea4e4b]`}>helo@myeazipay.com</span> and
            expect our response shortly after
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandInfo;

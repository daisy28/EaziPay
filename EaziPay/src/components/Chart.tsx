import Arrow from "../Assets/Chevron_Right.png";
import ChartFlow from "../Assets/Frame 118.png";
import style from "./style.module.css";

const Chart = () => {
  return (
    <section
      className={`bg-[#fff] absolute p-4 right-0 left-[60px] md:left-[240px] z-10 top-[1600px] md:top-[1100px] lg:top-[750px] font-face-ae`}
    >
      <div
        className={`${style.chat_scroll} border border-[#e7e8e7] rounded-[16px] p-4 shadow-md overflow-x-scroll`}
      >
        <div className={`w-[1000px]`}>
          <div className={`flex gap-4 items-start justify-between`}>
            <div>
              <p
                className={`Font-[500] text-[1rem] leading-[24px] text-[#515251] mb-4`}
              >
                Inflow
              </p>
              <h2
                className={`Font-[700] text-[1.6rem] leading-[36x] text-[#219653]`}
              >
                N,1567,552
              </h2>
            </div>
            <div>
              <p
                className={`Font-[500] text-[1rem] leading-[24px] text-[#515251] mb-4`}
              >
                Outflow
              </p>
              <h2
                className={`Font-[700] text-[1.6rem] leading-[36x] text-[#219653]`}
              >
                N,1567,552
              </h2>
            </div>
            <div className={`flex gap-4`}>
              <p
                className={`Font-[500] text-[1rem] leading-[24px] text-[#515251]`}
              >
                Inflow/Outflow
              </p>
              <img className={`cursor-pointer`} src={Arrow} alt="arrow" />
            </div>
          </div>

          <div>
            <img className={`w-[100%]`} src={ChartFlow} alt="Chart" />
          </div>
          <div
            className={`w-[72px] bg-[#11453b] py-2 px-3 text-center text-white font-[700] text-[1rem] leading-[24px] ml-auto`}
          >
            2022
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;

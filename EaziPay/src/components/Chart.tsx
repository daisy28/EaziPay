import Arrow from "../Assets/Chevron_Right.png";
import style from "./style.module.css";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip,  } from "chart.js";
import { Line } from "react-chartjs-2";

const Chart = () => {

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, );
  const options = {
    responsive: false,
    plugins: {
      lengend: {
        display: false
      },
      title: {
        display: false
      },
      subtitle: {
        display: false
      }
    },
  };
  const labels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
  const data = {
    labels,
    datasets: [
      {
        data: [15, 20, 30, 40, 50, 90, 40, 60, 200, 150],
        borderColor: "rgb(17,69,59)",
        backgroundColor: `rgb(17,69,59)`,
        pointStyle: false,
        tension: 1,
        borderWidth: 1,
        capBeizerPoints: true,
      },
      {
        data: [9, 15, 25, 30, 25, 100, 80, 30, 150, 120],
        borderColor: `rgb(234,78,75)`,
        backgroundColor: `rgb(234,78,75))`,
        pointStyle: false,
        tension: 1,
        borderWidth: 1,
        capBeizerPoints: true,
      },
    ]
  }

  return (
    <section
      className={`bg-[#fff] p-4 relative right-0 my-6 font-face-ae`}
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
            {/* <img className={`w-[100%]`} src={ChartFlow} alt="Chart" /> */}
            <Line style={{width: "910px", height: "500px", marginTop: "2rem"}} options={options} data={data} />
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

import AdminHero from "../components/AdminHero";
import Chart from "../components/Chart";
import Activities from "../components/Activities";
import style from "../components/style.module.css";

const Admin = () => {
  return (
    <section className={`${style.resize_width}`}>
      <AdminHero />
      <Chart />
      <Activities />
    </section>
  );
};

export default Admin;
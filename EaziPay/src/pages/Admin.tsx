import AdminHero from "../components/AdminHero";
import Chart from "../components/Chart";
import Activities from "../components/Activities";

const Admin = () => {
  return (
    <section className={``}>
      <AdminHero />
      <Chart />
      <Activities />
    </section>
  );
};

export default Admin;
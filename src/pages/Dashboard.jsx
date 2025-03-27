import { Outlet } from "react-router-dom";
import { Sidebar, TopSidebar } from "../components/common";
import { PublicLayout } from "../layout/index";

const Dashboard = () => {
  return (
    <PublicLayout>
      <div className="h-[91.5%] 6xl:h-[94%] flex flex-col md:flex-row">
        <Sidebar />
        <TopSidebar />

        <Outlet />
      </div>
    </PublicLayout>
  );
};

export default Dashboard;

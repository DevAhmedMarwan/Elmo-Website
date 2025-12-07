import ContentChange from "@/components/ContentChange";
import SidebarTop from './../components/SidebarTop';

const Dashboard = () => {
  return (
    <>
      <div className="w-full h-0">
        <SidebarTop  title="Dashboard"/>
      </div>
      <main className="transition-all duration-300 w-full">
        <ContentChange />
      </main>
      </>
  );
};

export default Dashboard;

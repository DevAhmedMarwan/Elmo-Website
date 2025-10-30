import { SidebarProvider } from "@/components/ui/sidebar";
import ContentChange from "@/components/ContentChange";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <main className="transition-all duration-300">
        <ContentChange />
      </main>
    </SidebarProvider>
  );
};

export default Dashboard;

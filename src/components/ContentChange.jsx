import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSidebar } from "@/components/ui/sidebar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddCardIcon from "@mui/icons-material/AddCard";
import { ExampleChart } from "./ExampleChart";
import { ChartRadialStacked } from "./ChartRadialStacked";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const ContentChange = () => {
  const { open } = useSidebar();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});

  const loadingAnimation = () => {
    return (
      <DotLottieReact
        src="public\Animation\N9ai18Eyo5.lottie"
        loop
        autoplay
        style={{ width: 300, height: 300 }}
      />
    );
  };

  useEffect(() => {
    const handle = async () => {
      try {
        const res = await axios.get(
          "https://appoint-api.testingelmo.com/api/v1/en/admin/widgets/stats"
        );
        if (res.status === 200) {
          setStats(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    handle();
  }, []);
  console.log(open);
  
  return (
    <div
      className={`transition-all duration-500 ease-in-out min-h-screen absolute ${
        open ? "left-[280px]" : "left-[90px] !top-0"
      }`}
    >
      <main className="flex flex-col gap-6 p-6">
        {loading ? (
          <div className="flex justify-center w-full">
            {loadingAnimation()}
          </div>
        ) : (
          <>
            {/* Info Cards */}
            <div className="grid gap-4 grid-cols-4">
              {[
                {
                  title: "Daily Income",
                  value: stats.dailyIncom,
                  icon: <AttachMoneyIcon />,
                },
                {
                  title: "Today's Appointments",
                  value: stats.todayAppointment,
                  icon: <AddCardIcon />,
                },
                {
                  title: "Total Appointments",
                  value: stats.totalAppointment,
                  icon: <AddCardIcon />,
                },
                {
                  title: "Total Clients",
                  value: stats.totalClient,
                  icon: <AddCardIcon />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-4 border flex flex-col justify-between shadow-sm"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-sm font-medium text-gray-600">
                      {item.title}
                    </h2>
                    <span className="text-gray-600">{item.icon}</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="flex gap-2">
              <div className="bg-white space-x-20 rounded-xl w-[850px]">
                <ExampleChart />
              </div>
              <div className="bg-white rounded-xl w-[500px]">
                <ChartRadialStacked />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ContentChange;

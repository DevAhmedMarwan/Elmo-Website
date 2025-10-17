import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddCardIcon from "@mui/icons-material/AddCard";
import { ExampleChart } from "./ExampleChart";
const ContentChange = () => {
  return (
    <div className="!h-auto">
          <main className="flex flex-col gap-4 p-6">
            <div className="grid gap-4 grid-cols-4">
              <div className="bg-white rounded-lg p-4 border">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm font-medium text-gray-600 mb-1">
                    Daily income
                  </h2>
                  <p>
                    <AttachMoneyIcon className="text-gray-600" />
                  </p>
                </div>
                <p className="text-3xl font-bold text-gray-900">0</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm font-medium text-gray-600 mb-1">
                    Today's Appointments
                  </h2>
                  <p>
                    <AddCardIcon className="text-gray-600" />
                  </p>
                </div>
                <p className="text-3xl font-bold text-gray-900">0</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm font-medium text-gray-600 mb-1">
                    Total Appointments
                  </h2>
                  <p>
                    <AddCardIcon className="text-gray-600" />
                  </p>
                </div>
                <p className="text-3xl font-bold text-gray-900">2</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm font-medium text-gray-600 mb-1">
                    Total Clients
                  </h2>
                  <p>
                    <AddCardIcon className="text-gray-600" />
                  </p>
                </div>
                <p className="text-3xl font-bold text-gray-900">1</p>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-2">
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
                <div className="">
                  <ExampleChart />
                </div>
              </div>
              <div className="bg-card text-card-foreground gap-6 rounded-xl border flex flex-col p-4">
                <div className="w-64 h-64 mt-14 mx-auto">
                  <Doughnut
                    style={{ width: 256, height: 256 }}
                    data={{
                      labels: [
                        "Accepted Appointments (100%)",
                        "Rejected Appointments (0%)",
                        "Pending Appointments (0%)",
                      ],
                      datasets: [
                        {
                          data: [100, 0, 0],
                          backgroundColor: ["#2f855a", "#c53030", "#d69e2e"],
                          borderWidth: 0,
                          cutout: "75%",
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          display: true,
                          position: "bottom",
                          labels: {
                            usePointStyle: true,
                            pointStyle: "circle",
                            boxWidth: 12,
                            padding: 30,
                          },
                        },
                        tooltip: {
                          callbacks: {
                            label: function (context) {
                              const dataset = context.chart.data.datasets[0];
                              const labels = context.chart.data.labels;
                              return labels.map((label, i) => {
                                return `${label}: ${dataset.data[i]}%`;
                              });
                            },
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </main>
    </div>
  );
};

export default ContentChange;

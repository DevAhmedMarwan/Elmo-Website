import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddCardIcon from "@mui/icons-material/AddCard";
import { ExampleChart } from "./ExampleChart";
import { ChartRadialStacked } from "./ChartRadialStacked";

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
                <div className="">
                  <ChartRadialStacked />
                </div>
            </div>
          </main>
    </div>
  );
};

export default ContentChange;

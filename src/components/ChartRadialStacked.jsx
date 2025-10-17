"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart with stacked sections";

const chartData = [{ Accepted: 100, Rejected: 0, Pending: 0 }];

const chartConfig = {
  Accepted: {
    label: "Accepted",
    color: "#1F845A",
  },
  Rejected: {
    label: "Rejected",
    color: "#AE2E24",
  },
  Pending: {
    label: "Pending",
    color: "#CF9F02",
  },
};

export function ChartRadialStacked() {

  return (
    <div className="bg-card text-card-foreground gap-6 rounded-xl flex flex-col p-4 !pt-0">
      <Card className="flex flex-col h-full">
        <CardContent className="flex flex-1 items-center justify-center pb-0">
            <div className="h-[450px]">
          <ChartContainer
            config={chartConfig}
            className="mx-auto w-full max-w-[300px] !h-[450px]"
          >
            <RadialBarChart
              data={chartData}
              endAngle={180}  
              innerRadius={100}
              outerRadius={180}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 16}
                            className="fill-foreground text-[20px] font-bold"
                          >
                            appointments
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
              <RadialBar
                dataKey="Accepted"
                stackId="a"
                cornerRadius={5}
                fill="#1F845A"
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="Rejected"
                fill="#AE2E24"
                stackId="a"
                cornerRadius={5}
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="Pending"
                fill="#CF9F02"
                stackId="a"
                cornerRadius={5}
                className="stroke-transparent stroke-2"
              />
            </RadialBarChart>
          </ChartContainer>
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none font-medium">
            <div className="bg-[#1F845A] p-2 items-start rounded-full"></div>
            <h2>Accepted Appointments (100%)</h2>
          </div>
          <div className="flex items-center gap-2 leading-none font-medium">
            <div className="bg-[#AE2E24] p-2 rounded-full"></div>
            <h2>Rejected Appointments (0%)</h2>
          </div>
          <div className="flex items-center gap-2 leading-none font-medium">
            <div className="bg-[#CF9F02] p-2 rounded-full"></div>
            <h2>Pending Appointments (0%)</h2>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

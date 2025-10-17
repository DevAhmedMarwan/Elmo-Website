"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export const description = "An area chart with axes"

const chartData = [
  { desktop: 40, mobile: 20 },
  { desktop: 30, mobile: 15 },
]

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
}

export function ExampleChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-foreground">Year overview</CardTitle>
        <CardDescription className="text-muted-foreground">Appointments</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart data={chartData} margin={{ left: -20, right: 12 }}>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} domain={[0, 50]} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area dataKey="desktop" type="natural" fill="var(--color-desktop)" fillOpacity={0.4} stroke="var(--color-desktop)" />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full justify-between items-end">
          {["05-2025", "10-2025"].map((month) => (
            <div key={month} className="text-center">
              <p className="text-[15px]">1</p>
              <div className="border w-[250px] h-2.5 bg-black rounded-full hover:bg-[oklch(83.98%_.195_124.9)]"></div>
              <p className="text-[oklch(55.4%_.046_257.417)]">{month}</p>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

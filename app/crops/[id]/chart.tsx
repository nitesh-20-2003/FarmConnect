"use client";

// import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { state: "Maharashtra", visitors: 30, fill: "var(--color-maharashtra)" },
  { state: "Punjab", visitors:  20, fill: "var(--color-punjab)" },
  { state: "Odisha", visitors: 10, fill: "var(--color-odisha)" },
  {
    state: "Madhya Pradesh",
    visitors: 5,
    fill: "var(--color-madhya-pradesh)",
  },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  maharashtra: {
    label: "Maharashtra",
    color: "hsl(var(--chart-1))",
  },
  punjab: {
    label: "Punjab",
    color: "hsl(var(--chart-2))",
  },
  odisha: {
    label: "Odisha",
    color: "hsl(var(--chart-3))",
  },
  madhya_pradesh: {
    label: "Madhya Pradesh",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Major producing states</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors" nameKey="state" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

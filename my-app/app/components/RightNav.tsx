'use client'
import { Calendar } from "@/components/ui/calendar"
import { ChartRadarLinesOnly } from "@/components/ui/ChartRadarLinesOnly"
import { CalendarDays, Activity, TrendingUp } from "lucide-react"
import { useState } from "react"

const RightNav = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="h-screen max-h-screen overflow-y-auto">
      <div className="flex flex-col space-y-6 py-4 px-2">
      
      {/* Calendar Section */}
      <div className="space-y-3 ">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-muted-foreground " />
          <h3 className="font-semibold text-sm">Calendar</h3>
        </div>
        <div className="bg-card rounded-lg p-3 shadow-sm flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Chart Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-semibold text-sm">Analytics</h3>
        </div>
        <div className="bg-card rounded-lg p-3 shadow-sm">
          <ChartRadarLinesOnly />
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-semibold text-sm">Quick Stats</h3>
        </div>
        <div className="space-y-2">
          <div className="bg-card rounded-lg p-3 shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Today's Appointments</span>
              <span className="font-semibold text-primary">8</span>
            </div>
          </div>
          <div className="bg-card rounded-lg p-3 shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Pending Tasks</span>
              <span className="font-semibold text-destructive">3</span>
            </div>
          </div>
          <div className="bg-card rounded-lg p-3 shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Completed</span>
              <span className="font-semibold text-green-600">12</span>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default RightNav

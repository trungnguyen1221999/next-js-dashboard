import { ChartAreaInteractive } from "@/components/ChartAreaInteractive";
import { ChartBarHorizontal } from "@/components/ui/Bar ChartHorizontal";
import { ChartPieInteractive } from "@/components/ui/ChartPieInteractive";
import { Calendar, Users, TrendingUp, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-4">
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 ">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Total Patients</p>
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12%
              </p>
            </div>
            <Users className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>

        <div className="bg-card rounded-lg p-4 ">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Appointments Today</p>
              <p className="text-2xl font-bold">28</p>
              <p className="text-xs text-blue-600 flex items-center mt-1">
                <Calendar className="h-3 w-3 mr-1" />
                8 pending
              </p>
            </div>
            <Calendar className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>

        <div className="bg-card rounded-lg p-4 ">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Revenue</p>
              <p className="text-2xl font-bold">$45,231</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +20.1%
              </p>
            </div>
            <TrendingUp className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>

        <div className="bg-card rounded-lg p-4 ">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Active Sessions</p>
              <p className="text-2xl font-bold">573</p>
              <p className="text-xs text-yellow-600 flex items-center mt-1">
                <Activity className="h-3 w-3 mr-1" />
                +2.5%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-card rounded-lg p-4 ">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-1">Analytics Overview</h2>
          <p className="text-xs text-muted-foreground">Track your performance metrics over time</p>
        </div>
        <ChartAreaInteractive />
      </div>

      {/* Bottom Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-card rounded-lg p-4 ">
          <div className="mb-4">
            <h3 className="text-base font-semibold mb-1">Department Performance</h3>
            <p className="text-xs text-muted-foreground">Compare performance across departments</p>
          </div>
          <ChartBarHorizontal />
        </div>

        <div className="bg-card rounded-lg p-4 ">
          <div className="mb-4">
            <h3 className="text-base font-semibold mb-1">Patient Distribution</h3>
            <p className="text-xs text-muted-foreground">View patient demographics breakdown</p>
          </div>
          <ChartPieInteractive />
        </div>
      </div>

    </div>
  )
}

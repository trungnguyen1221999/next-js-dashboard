'use client'
import React from 'react'
import { Calendar as CalendarIcon, TrendingUp, Activity } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet'

interface MobileRightNavProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  trigger: React.ReactNode
}

const MobileRightNav: React.FC<MobileRightNavProps> = ({ isOpen, onOpenChange, trigger }) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] p-4">
        <SheetHeader className="pb-6">
          <SheetTitle>Quick Access</SheetTitle>
        </SheetHeader>
        
        <div className="space-y-6 h-[calc(100vh-120px)] overflow-y-auto">
          {/* Calendar */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">Calendar</h3>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-full"
            />
          </div>

          {/* Quick Stats */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">Quick Stats</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">24</p>
                    <p className="text-xs text-muted-foreground">Today's Appointments</p>
                  </div>
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="p-3 rounded-lg border bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">89%</p>
                    <p className="text-xs text-muted-foreground">Satisfaction Rate</p>
                  </div>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="p-3 rounded-lg border bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">156</p>
                    <p className="text-xs text-muted-foreground">Active Patients</p>
                  </div>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">Recent Activity</h3>
            <div className="space-y-2">
              <div className="p-3 rounded-lg border bg-card">
                <p className="text-sm font-medium">Patient Check-in</p>
                <p className="text-xs text-muted-foreground">John Doe - 2 minutes ago</p>
              </div>
              <div className="p-3 rounded-lg border bg-card">
                <p className="text-sm font-medium">Appointment Scheduled</p>
                <p className="text-xs text-muted-foreground">Jane Smith - 5 minutes ago</p>
              </div>
              <div className="p-3 rounded-lg border bg-card">
                <p className="text-sm font-medium">Payment Received</p>
                <p className="text-xs text-muted-foreground">Mike Johnson - 10 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileRightNav
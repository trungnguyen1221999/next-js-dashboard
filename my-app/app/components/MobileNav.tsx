'use client'
import React from 'react'
import { 
  Heart, 
  LayoutDashboard, 
  Calendar, 
  CalendarDays, 
  Users, 
  MessageSquare, 
  CreditCard, 
  Settings, 
  HelpCircle,
  LogOut
} from 'lucide-react'
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet'

interface MobileNavProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  trigger: React.ReactNode
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onOpenChange, trigger }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0">
        <div className="h-full overflow-y-auto">
          <div className="flex flex-col py-4 px-2">
            {/* Logo */}
            <SheetHeader className="pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className='pl-3'><Heart className="h-8 w-8"/></div>
                <SheetTitle className="text-xl font-bold">Helsitu</SheetTitle>
              </div>
            </SheetHeader>

            {/* Navigation Menu */}
            <nav className="flex-1">
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground"
                    onClick={() => onOpenChange(false)}
                  >
                    <LayoutDashboard className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                    <span className="text-sm font-medium">Overview</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground"
                    onClick={() => onOpenChange(false)}
                  >
                    <Calendar className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                    <span className="text-sm font-medium">Appointment</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground"
                    onClick={() => onOpenChange(false)}
                  >
                    <CalendarDays className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                    <span className="text-sm font-medium">Calendar</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground"
                    onClick={() => onOpenChange(false)}
                  >
                    <Users className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                    <span className="text-sm font-medium">Patients</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground"
                    onClick={() => onOpenChange(false)}
                  >
                    <MessageSquare className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                    <span className="text-sm font-medium">Messages</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground"
                    onClick={() => onOpenChange(false)}
                  >
                    <CreditCard className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                    <span className="text-sm font-medium">Payment</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground"
                    onClick={() => onOpenChange(false)}
                  >
                    <Settings className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                    <span className="text-sm font-medium">Settings</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground"
                    onClick={() => onOpenChange(false)}
                  >
                    <HelpCircle className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                    <span className="text-sm font-medium">Need Help</span>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Bottom Section */}
            <div className="mt-auto pt-6">
              {/* Logout Button */}
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group text-left hover:bg-destructive/10">
                <LogOut className="h-5 w-5 text-destructive" />
                <span className="text-sm font-medium text-destructive">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
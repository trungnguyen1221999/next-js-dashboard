import { ModeToggle } from './ModeToggle'
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

const LeftNav = () => {
  return (
    <div className="h-screen max-h-screen overflow-y-auto">
      <div className="flex flex-col py-4 px-2">
        {/* Logo */}
        <div className="flex items-center gap-3 pb-6 mb-6">
          <div className='pl-3'><Heart className="h-8 w-8"/></div>
          <h2 className="text-xl font-bold">Helsitu</h2>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground">
              <LayoutDashboard className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
              <span className="text-sm font-medium">Overview</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground">
              <Calendar className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
              <span className="text-sm font-medium">Appointment</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground">
              <CalendarDays className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
              <span className="text-sm font-medium">Calendar</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground">
              <Users className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
              <span className="text-sm font-medium">Patients</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground">
              <MessageSquare className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
              <span className="text-sm font-medium">Messages</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground">
              <CreditCard className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
              <span className="text-sm font-medium">Payment</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground">
              <Settings className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
              <span className="text-sm font-medium">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group hover:bg-accent hover:text-accent-foreground">
              <HelpCircle className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
              <span className="text-sm font-medium">Need Help</span>
            </a>
          </li>
        </ul>
      </nav>

        {/* Bottom Section */}
        <div className="mt-auto pt-6 space-y-3">
          <ModeToggle />
          
          {/* Logout Button */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group text-left hover:bg-destructive/10">
            <LogOut className="h-5 w-5 text-destructive" />
            <span className="text-sm font-medium text-destructive">Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LeftNav

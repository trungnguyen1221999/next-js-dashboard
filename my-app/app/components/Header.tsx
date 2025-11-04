'use client'
import React, { useState } from 'react'
import { Search, Bell, User, Menu, MoreVertical } from 'lucide-react'
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet'
import { ModeToggle } from './ModeToggle'
import MobileNav from './MobileNav'
import MobileRightNav from './MobileRightNav'

const Header = () => {
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isMobileRightNavOpen, setIsMobileRightNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between h-16 px-4 py-4">
      {/* Left Section - Mobile Menu + Page Title */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <MobileNav 
            isOpen={isMobileNavOpen}
            onOpenChange={setIsMobileNavOpen}
            trigger={
              <button className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                <Menu className="h-5 w-5" />
              </button>
            }
          />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-foreground">Overview</h1>
      </div>

      {/* Center Section - Search */}
      <div className="flex-1 max-w-md mx-2 md:mx-8">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
          />
        </div>
      </div>

      {/* Right Section - Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Mode Toggle - Always visible */}
        <div>
          <ModeToggle />
        </div>

        {/* Mobile Quick Access - Mobile only */}
        <div className="lg:hidden">
          <MobileRightNav 
            isOpen={isMobileRightNavOpen}
            onOpenChange={setIsMobileRightNavOpen}
            trigger={
              <button className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                <MoreVertical className="h-5 w-5" />
              </button>
            }
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full"></span>
        </button>

        {/* User Profile */}
        <Sheet open={isAccountMenuOpen} onOpenChange={setIsAccountMenuOpen}>
          <SheetTrigger asChild>
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium hidden sm:inline">Kai Nguyen</span>
            </button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader className="pb-6">
              <SheetTitle className="text-xl font-semibold">Edit Profile</SheetTitle>
            </SheetHeader>
            
            <div className="space-y-6 p-4">
              {/* Profile Avatar */}
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-semibold">
                  <User className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Kai Nguyen</h3>
                  <p className="text-sm text-muted-foreground">trungnguyen1221999@gmail.com</p>
                </div>
              </div>

              {/* Profile Form */}
              <form className="space-y-6">
                {/* Full Name */}
                <div className="space-y-3">
                  <label htmlFor="fullName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    defaultValue="Kai Nguyen"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* Username */}
                <div className="space-y-3">
                  <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    defaultValue="trungnguyen1221999"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* Email (Read-only) */}
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    defaultValue="trungnguyen1221999@gmail.com"
                    disabled
                    className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 pt-6">
                  <button
                    type="button"
                    onClick={() => setIsAccountMenuOpen(false)}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Header

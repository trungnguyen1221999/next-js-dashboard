import React from 'react'
import { Heart, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t bg-card shadow-sm">
      <div className="px-4 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
          {/* Left - Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
            <span className="hidden sm:inline">© 2025 Helsitu. Made with</span>
            <span className="sm:hidden">© 2025 Made with</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500" />
            <span className="hidden sm:inline">by Kai Nguyen (Trung Nguyen) with NextJs, Shadcnui</span>
            <span className="sm:hidden">by Kai Nguyen</span>
          </div>

          {/* Right - Links & Social */}
          <div className="flex items-center gap-4">
            {/* Quick Links */}
            <div className="hidden sm:flex items-center gap-3 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a 
                href="https://github.com/trungnguyen1221999" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Links - Show on small screens */}
        <div className="sm:hidden flex justify-center gap-4 mt-2 pt-2 border-t text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
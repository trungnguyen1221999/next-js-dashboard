import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemProvider";
import LeftNav from "./components/LeftNav";
import Header from "./components/Header";
import RightNav from "./components/RightNav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kai Nguyen's Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <ThemeProvider 
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
       > 
         <div className="h-screen max-h-screen">
           {/* Desktop Layout */}
           <div className="hidden lg:grid lg:grid-cols-[15%_1fr_20%] h-full">
             {/* Left Navigation - 15% width */}
             <div className="shadow-lg p-2">
               <LeftNav />
             </div>
             
             {/* Main Content Area - Remaining space (65%) */}
             <div className="flex flex-col">
               {/* Header */}
               <header>
                 <div className="container px-2">
                   <Header />
                 </div>
               </header>
               
               {/* Main Content */}
               <main className="flex-1 overflow-auto">
                 <div className="container px-2 py-3">
                   {children}
                 </div>
               </main>

               {/* Footer */}
               <Footer />
             </div>
             
             {/* Right Navigation - 20% width */}
             <div className="shadow-lg p-2">
               <RightNav />
             </div>
           </div>

           {/* Mobile Layout */}
           <div className="lg:hidden h-full flex flex-col">
             {/* Header */}
             <header>
               <div className="px-4">
                 <Header />
               </div>
             </header>
             
             {/* Main Content */}
             <main className="flex-1 overflow-auto">
               <div className="px-4 py-3">
                 {children}
               </div>
             </main>

             {/* Footer */}
             <Footer />
           </div>
         </div>
       </ThemeProvider>
      </body>
    </html>
  );
}

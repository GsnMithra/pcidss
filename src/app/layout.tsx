import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider' 

export const fontSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'PCI-DSS',
  description: 'PCI-PCI DSS v4.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <nav className="flex bg-black-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-start h-16">
                <div className="flex items-center">
                    <a href='/'><div className="text-auto font-bold text-2xl">
                      PCI-DSS v4.0
                    </div></a>
                </div>
                {/* <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                    </div>
                </div> */}
            </div>
        </div>
      </nav>
        <ThemeProvider
            attribute="className"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

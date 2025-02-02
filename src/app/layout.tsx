import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ShadCN Tutorial - NextJS",
  description: "A tutorial for ShadCN",
};

type Props = { children: React.ReactNode };

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SonnerToaster richColors />
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;

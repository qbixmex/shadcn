import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShadCN Tutorial - NextJS",
  description: "A tutorial for ShadCN",
};

type Props = { children: React.ReactNode };

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen grid place-content-center`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

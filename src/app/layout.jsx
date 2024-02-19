import "./globals.css";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";

const gabarito = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lar Movie",
  description: "Created By Gilar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-primary`} suppressHydrationWarning={true} >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

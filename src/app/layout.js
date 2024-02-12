import "./globals.css";
import Navbar from "./components/Utilities/Navbar";
import { Inter } from "next/font/google";

const gabarito = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lar Movie",
  description: "blablabla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>   
      <Navbar /> 
      {children}
      </body>
    </html>
  );
}

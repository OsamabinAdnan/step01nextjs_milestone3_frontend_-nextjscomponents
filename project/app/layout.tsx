import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import CartProvider from "./components/Provider";
import ShoppingCartModel from "./components/ShoppingCartModel";
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
  title: "BazarioX | Your Ultimate E-commerce Destination",
  description: "BazarioX is your one-stop online store for quality fashion, electronics, and home essentials with secure payments and fast delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased py-2 mx-auto`}
       >
        <CartProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              
            <Navbar/>
            <ShoppingCartModel/>
            {children}
            <Footer/>
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}

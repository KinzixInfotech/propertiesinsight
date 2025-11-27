import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/page";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Properties Insight",
  description: "Properties Insight",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Header />
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Footer />

    </html>
  );
}

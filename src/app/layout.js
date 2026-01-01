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
  verification: {
    google: "SNzhirTDKGNjNu4JNJrxQZfUeC0RNZUHY2cjQVRYxjo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="SNzhirTDKGNjNu4JNJrxQZfUeC0RNZUHY2cjQVRYxjo" />
      </head>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}

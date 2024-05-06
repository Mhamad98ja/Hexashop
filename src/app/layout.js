import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer"
import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";

const bodyFont = Montserrat({ 
  subsets: ["latin"], 
  weight: ['400','700','900'],
});

export const metadata = {
  title: "Store",
  description: "created by next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider >
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

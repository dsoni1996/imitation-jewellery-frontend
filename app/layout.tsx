import type { Metadata } from "next";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aarohi Style | Imitation Jewellery",
  description: "Elegant imitation jewellery for daily glam, festive moments, and statement looks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

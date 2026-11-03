import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aarohi Style | Imitation Jewellery for Every Moment",
  description: "Discover thoughtfully chosen imitation jewellery for everyday sparkle, festive moments, and gifts. Find your new favourite piece at Aarohi Style.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><CartProvider><Navbar /><main>{children}</main><Footer /></CartProvider></body></html>;
}

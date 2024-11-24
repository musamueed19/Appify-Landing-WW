import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Poppins({
  weight: ["100", "300", "400", "500", "700", "900", "200", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Appify - Landing Page | Next 15",
  description:
    "Appify. Where you can collaborate with us. App landing page using Next.JS 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {/* Navbar or Header */}
        {/* <Header /> */}
        <ResponsiveNav />

        {/* Hero or Main Section */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

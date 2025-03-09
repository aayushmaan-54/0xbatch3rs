import type { Metadata } from "next";
import { Outfit, VT323 } from "next/font/google";
import "./globals.css";
import cn from "@/lib/cn";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";


const outfit = Outfit({
  variable: "--font-outfit",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: ['400'],
  display: 'swap',
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://batchers.vercel.app"),
  title: {
    default: "Batchers - Share and Explore .bat Scripts",
    template: "Batchers | %s",
  },
  description: "Batchers is a platform for sharing .bat file scripts. Browse scripts, upload your own, customize themes, and engage with the community.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Batchers - Share and Explore .bat Scripts",
    description: "Discover, upload .bat file scripts. Engage with the community through comments, reactions, and featured scripts.",
    images: ["/batchers-og.png"],
  },
  keywords: [
    "Batchers",
    ".bat Scripts",
    "Batch File Sharing",
    "Batch Scripting",
    "Automation Scripts",
    "Command Line Scripts",
    "Script Sharing Platform",
  ],
};


export default function RootLayout({
  children,
  auth
}: Readonly<{
  children: React.ReactNode;
  auth?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          outfit.variable, vt323.variable,
          outfit.className,
          "antialiased bg-primary text-text-light",
        )}
      >
        <Navbar />
          {children}
          {auth}
        <Footer />
      </body>
    </html>
  );
}

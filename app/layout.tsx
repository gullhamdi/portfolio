import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/component/Layout/Footer";

const inter = Inter({
  subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Seçil | Portfolio",
  description: "Merhaba! Ben Seçil. Yemek yapmayı bir işten çok bir tutku, bir sanat dalı olarak görüyorum. Her tarifte bir hikaye, her tabakta bir duygu olduğuna inanıyorum. Geleneksel lezzetleri modern dokunuşlarla harmanlamayı, damaklarda iz bırakacak tatlar yaratmayı seviyorum. Mutfakta geçirdiğim her an, kendimi daha çok keşfettiğim bir yolculuk gibi. Portfolyomda bu yolculuğun en lezzetli anlarını sizlerle paylaşıyorum. Afiyetle incelemeniz dileğiyle!",
  keywords: [
    "Secil",
    "Portfolio",
    "Yemek",
    "Yemek Tarifleri",
    "Yemek Blogu",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {inter.className}>
          <Toaster position="top-center"/>
        {children}
          <Footer />
      </body>
    </html>
  );
}

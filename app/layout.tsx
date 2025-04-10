import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/fragments/Layout";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template: "%s | Farkhan - Next.js Developer",
    default: "Farkhan - Next.js Developer",
  },
  icons: {
    icon: "/profile.jpeg",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--geist-font",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geist.className} cursor-none hide-scrollbar antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

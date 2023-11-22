import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/navbar";
import { Searchbar } from "@/components/searchbar";
import localFont from "next/font/local";

const iranSans = localFont({ src: "../../public/fonts/Iranian Sans.ttf" });
export const metadata: Metadata = {
  title: "KHN",
  description: "shopping from amazon ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={iranSans.className}>
        <Navbar />

        <div className="my-4 mx-7 ">
          <Searchbar />
        </div>
        <div className="my-4 mx-7 ">{children}</div>
      </body>
    </html>
  );
}

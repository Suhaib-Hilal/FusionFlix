import type { Metadata } from "next";
import "@/global/globals.css";

import data from "@/lib/metadata";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { roboto } from "@/global/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL ?? "https://localhost:3000"),
  ...data,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className + " overflow-hidden w-full"}>
        <Header
          className={`
            fixed top-0 -left-4 h-[56px] w-full bg-inherit pl-6 pr-4 py-2 
            sm:pl-8 z-10
          `}
        />
        <div className="flex h-full">
          <Sidebar className="pt-2" />
          <main
            className={`
              pt-[68px] p-4 h-full w-full overflow-y-scroll overflow-x-hidden 
              scroll-smooth 
            `}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

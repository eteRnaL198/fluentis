import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/header";
import Main from "@/components/main";

export const metadata: Metadata = {
  title: "Prasaku",
  description: "Practice instant English composition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-dvh">
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}

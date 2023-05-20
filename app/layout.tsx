import "./globals.css";
import { Inter } from "next/font/google";
import ToasterProvider from "./providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI travel trip app",
  description: "AI travel app created by P&R",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}

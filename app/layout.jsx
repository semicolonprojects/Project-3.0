import { Montserrat } from "next/font/google";
import "./globals.css";

const monsterrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monsterrat.className} bg-[#E1EAF3]`}>{children}</body>
    </html>
  );
}

import { Montserrat } from "next/font/google";
import "./globals.css";

const monsterrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Nettoyer Shoes",
  description: "Nettoyer Shoes | Cuci Sepatu Malang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${monsterrat.className} bg-[#E1EAF3]`}>{children}</body>
    </html>
  );
}

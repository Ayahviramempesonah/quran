import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const AmiriBold = localFont({
  src: "./fonts/Amiri-Bold.ttf",
  variable: "--font-geist-ab",
  weight: "100 900",
});

const AmiriBoldItalic = localFont({
  src: "./fonts/Amiri-Bold.ttf",
  variable: "--font-geist-abi",
  weight: "100 900",
});







export const metadata = {
  title: "Al-Quran Online",
  description: "Al-Quran for everyone",};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

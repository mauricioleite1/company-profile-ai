import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const font = Onest({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Company Profile AI",
  description: "A company profile generator powered by AI - Maurício Leite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

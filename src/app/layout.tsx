import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genesis School | Best School in Srikakulam",
  description:
    "Genesis School is the top educational institution in Srikakulam, offering holistic education from Day Care to Grade 7.",
  keywords: [
    "best school in srikakulam",
    "top school in srikakulam",
    "best state curriculum school in srikakulam",
    "genesis school srikakulam",
    "top 10 schools in srikakulam",
    "good schools in srikakulam",
    "best day care in srikakulam",
    "best primary school in srikakulam",
    "best middle school in srikakulam",
    "srikakulam best schools",
    "quality education in srikakulam",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
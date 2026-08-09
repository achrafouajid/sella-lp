import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sella - تسخيرت الحومة",
  description:
    "تسخيرت الحومة، سلتك مضمونة | Your neighborhood's fresh produce, guaranteed",
  openGraph: {
    title: "Sella",
    description: "Your neighborhood's fresh produce, guaranteed",
    locale: "ar_MA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

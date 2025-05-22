import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import "../../globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nutria",
  description: "Gerencie suas refeições com facilidade e eficiência.",
  icons: [{ url: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <DashboardLayout title="">{children}</DashboardLayout>
      </body>
    </html>
  );
}

import { Metadata } from 'next';
import '../globals.css'

export const metadata: Metadata = {
  title: "Cayke Veras | Links",
  description:
    "Links - Cayke",
  icons: [
    { url: "favicon.ico", sizes: "any", type: "image/x-icon" },
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bedirhan Design | Portfolio",
  description: 'Welcome to Bedirhan "bedcodes" Yildirim projects portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-full flex justify-center px-4 lg:px-20">
          {children}
        </div>
      </body>
    </html>
  );
}

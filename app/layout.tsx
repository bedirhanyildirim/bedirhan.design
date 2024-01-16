import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

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
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="w-full flex justify-center px-4 lg:px-20">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

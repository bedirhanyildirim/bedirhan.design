import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeFooterMobile } from "@/components/theme/footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { GA_ID } from "@/lib/meta";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bedirhan YILDIRIM | Portfolio",
  description: 'Welcome to Bedirhan "bedcodes" Yildirim portfolio',
  keywords: "Bedirhan YILDIRIM",
  openGraph: {
    type: "website",
    url: "https://bedirhan.design",
    title: "Bedirhan YILDIRIM | Portfolio",
    description: 'Welcome to Bedirhan "bedcodes" Yildirim portfolio',
    siteName: "Bedirhan YILDIRIM | Portfolio",
    images: [
      {
        url: "https://bedirhan.design/favicon.ico",
      },
    ],
  },
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
          <ThemeFooterMobile />
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId={GA_ID} />
    </html>
  );
}

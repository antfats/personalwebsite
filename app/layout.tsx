import type { Metadata } from "next";
import { JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";


const jetbrainsMono = JetBrains_Mono({
  weight: ["100","200","300","400","500","600","700","800"],
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Anthony Fatato",
  description: "This is the metadata description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${jetbrainsMono.variable} antialiased`}>
          <Header />
        {children}
      </body>
    </html>
  );
}

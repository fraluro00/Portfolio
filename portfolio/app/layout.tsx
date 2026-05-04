import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fran Luengo Rojas — Java Fullstack Developer",
  description:
    "Java Fullstack Developer at EBN Banco. Spring Boot, Angular, cybersecurity. Building secure, scalable software in Madrid.",
  keywords: [
    "Fran Luengo",
    "Java Fullstack Developer",
    "Spring Boot",
    "Angular",
    "Cybersecurity",
    "EBN Banco",
    "Madrid",
  ],
  authors: [{ name: "Fran Luengo Rojas" }],
  openGraph: {
    title: "Fran Luengo Rojas — Java Fullstack Developer",
    description:
      "Engineering secure, performant software at the intersection of banking and cybersecurity.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">{children}</body>
    </html>
  );
}

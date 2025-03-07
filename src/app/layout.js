import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { JobProvider } from "@/store/jobStore"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Job Search Tracker",
  description: "Search for your next job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JobProvider>
          {children}
        </JobProvider>
      </body>
    </html>
  );
}

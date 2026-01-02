import "./global.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "CardioGuard AI",
  description: "Cardiovascular Risk Prediction System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#F9FAFB]">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />
          <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

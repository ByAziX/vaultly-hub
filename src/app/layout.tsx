// src/app/layout.tsx
import { ThemeProvider } from "@/app/contexts/ThemeContext";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "Vaultly Hub",
  description: "Application Vaultly Hub avec mode clair et sombre",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

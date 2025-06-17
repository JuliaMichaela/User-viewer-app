import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "User Viewer App",
  description: "Просмотр пользователей",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}

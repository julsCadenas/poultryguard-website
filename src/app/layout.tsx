import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poultry Guard",
  description: "Heat stress monitoring for poultry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />  
      </head>
      <body
        className='bg-customBlack'
      >
        {children}
      </body>
    </html>
  );
}

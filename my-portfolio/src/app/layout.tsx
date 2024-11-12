import './globals.css';

import React from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio website built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css"
        />
      </head>
      <body className="bg-gray-900 text-white">
        <main className="grid-container">
          <aside className="left-column"></aside>
          <section className="middle-column">{children}</section>
          <aside className="right-column"></aside>
        </main>
        <footer className="text-center py-4 bg-gray-800">
          <p>© 2024 My Portfolio</p>
        </footer>
      </body>
    </html>
  );
}

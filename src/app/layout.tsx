import type { Metadata } from "next";
import "../styles/globals.css";
import { Layout } from "@/components/layout";

export const metadata: Metadata = {
  title: "Porfolio | fujiyamaorange",
  description: "Portfolio of fujiyamaorange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Porfolio | fujiyamaorange" />
        <meta property="og:description" content="Portfolio of fujiyamaorange" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fujiyamaorange.vercel.app" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://github.com/fujiyamaorange/portfolio/assets/63333564/6d1d3c58-9723-4fe8-8603-3f211c1760e4"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="700" />
        <meta property="og:site_name" content="fujiyamaorange" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@fujiyamaorange" />
        <meta name="twitter:creator" content="@fujiyamaorange" />
        <meta name="twitter:title" content="Porfolio | fujiyamaorange" />
        <meta
          name="twitter:description"
          content="Portfolio of fujiyamaorange"
        />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/63333564/148645636-a73c4d97-a417-4eb7-9606-4313102f9d6e.png"
        />
        <meta name="twitter:image:alt" content="fujiyamaorange" />
        <meta name="twitter:site" content="@fujiyamaorange" />
        <meta name="twitter:creator" content="@fujiyamaorange" />
        <link
          rel="icon"
          href="https://user-images.githubusercontent.com/63333564/148645636-a73c4d97-a417-4eb7-9606-4313102f9d6e.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://user-images.githubusercontent.com/63333564/148645636-a73c4d97-a417-4eb7-9606-4313102f9d6e.png"
          sizes="76x76"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

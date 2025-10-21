export const metadata = {
  title: "FitmentAI",
  description: "Smarter wheel and tire fitment — powered by AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

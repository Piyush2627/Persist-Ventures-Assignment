import "./globals.css";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className="bg-zinc-900 text-zinc-200">
       {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}

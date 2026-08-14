import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dulce Canela | Postres hechos con cariño",
  description:
    "Dulce Canela ofrece postres artesanales preparados con cariño para compartir y celebrar momentos especiales.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

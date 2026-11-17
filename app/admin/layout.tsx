
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "zpack platform Admin panel",
  manifest: "/admin.webmanifest",
  themeColor: "#070d19",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

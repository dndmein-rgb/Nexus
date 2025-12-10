"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ClientLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function ClientLayout({ children, sidebar }: ClientLayoutProps) {
  const pathname = usePathname();
  const isProfilePage = pathname.startsWith("/profile/");

  if (isProfilePage) {
    // On profile pages, use full width without sidebar
    return <div className="lg:col-span-12">{children}</div>;
  }

  // On other pages, show sidebar + content
  return (
    <>
      <div className="hidden lg:block lg:col-span-3">{sidebar}</div>
      <div className="lg:col-span-9">{children}</div>
    </>
  );
}
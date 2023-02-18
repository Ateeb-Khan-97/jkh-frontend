'use client';
import Navbar from 'components/Layout/Navbar';
import Sidebar from 'components/Layout/Sidebar';
//
import React from 'react';
//
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarActive, setSidebarActive] = React.useState<boolean>(true);
  //
  return (
    <>
      <section className="flex h-screen w-[100%] overflow-hidden">
        <Sidebar sidebarActive={sidebarActive} />
        <div
          className={`relative transition-all ${
            sidebarActive ? 'w-[calc(100vw_-_300px)]' : 'w-[100vw]'
          }`}
        >
          <Navbar
            setSidebarActive={setSidebarActive}
            sidebarActive={sidebarActive}
          />
          <div className="h-[80px]" />
          <div className="custom_shadow h-[calc(100vh_-_80px)] overflow-y-auto bg-blue-50 p-10">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

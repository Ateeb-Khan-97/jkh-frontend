'use client';
import BreadcrumbComponent from 'components/Shared/BreadcrumbComponent';
//
import React from 'react';
//
const Header = () => (
  <header className="flex select-none flex-col">
    <BreadcrumbComponent />
    <span className="text-[#3b3e66]">
      <h1 className="text-3xl font-bold ">Dashboard</h1>
      <p>Please see dashboard below from all connected channels</p>
    </span>
  </header>
);
//
export default function DashboardPage() {
  return (
    <>
      <section className="p-5">
        <Header />
        <div className="flex h-96 flex-col items-center justify-center">
          <span className="text-2xl font-bold">Sorry</span>
          <h1 className="text-sm">This Page is under development</h1>
        </div>
      </section>
    </>
  );
}

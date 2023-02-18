'use client';
import BreadcrumbComponent from 'components/Shared/BreadcrumbComponent';
import DataTableComponent from 'components/Shared/DataTableComponent';
//
import React from 'react';
//
function Header() {
  return (
    <header className="flex select-none flex-col">
      <BreadcrumbComponent />
      <span className="text-[#3b3e66]">
        <h1 className="text-3xl font-bold ">Point of Sale</h1>
        <p>Please see point of sale below from all connected channels</p>
      </span>
    </header>
  );
}
//
function Table() {
  return <DataTableComponent data={[]} columns={[]} />;
}
//
export default function PosPage() {
  return (
    <section className="flex flex-col gap-5 p-5">
      <Header />
      <Table />
    </section>
  );
}

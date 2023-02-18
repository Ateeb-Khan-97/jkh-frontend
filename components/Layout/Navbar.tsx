'use client';

import { Burger } from '@mantine/core';
import React from 'react';
//
type PropType = {
  sidebarActive: boolean;
  setSidebarActive: (value: any) => void;
};
//
export default function Navbar({ setSidebarActive, sidebarActive }: PropType) {
  return (
    <nav className="absolute top-0 left-0 flex h-[80px] w-[100%] items-center justify-between px-5">
      <Burger
        opened={sidebarActive}
        onClick={() => setSidebarActive((o: boolean) => !o)}
      />
    </nav>
  );
}

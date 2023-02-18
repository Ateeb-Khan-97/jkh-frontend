'use client';
import { Button, NavLink } from '@mantine/core';
import { FaStore } from 'react-icons/fa';
import { MdChevronRight } from 'react-icons/md';
//
import React from 'react';
import SidebarData from 'modules/SidebarData/SidebarData';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import customNotification from 'functions/customNotification';
//
type PropType = {
  sidebarActive: boolean;
};
//
export default function Sidebar({ sidebarActive }: PropType) {
  // States
  const router = useRouter();
  const [active, setActive] = React.useState<number>(0);
  // functions
  function logoutHandler() {
    customNotification({ message: 'Logout Successfully!', title: 'Success' });
    setCookie('token', '');
    router.push('/');
  }
  //
  return (
    <section
      className={`${
        sidebarActive ? 'w-[300px]' : 'w-0'
      }  flex select-none flex-col overflow-hidden transition-all`}
    >
      <div className="flex h-[80px] items-center justify-center gap-2 border">
        <span className="text-2xl">
          <FaStore />
        </span>
        <span className="text-2xl font-bold">JKE</span>
      </div>
      <div className="h-[calc(100vh_-_160px)] overflow-y-auto">
        {SidebarData.length > 0
          ? SidebarData.map((each_sidebar, key) => {
              return each_sidebar.hasChildren != true ? (
                <Link key={key} href={each_sidebar.href!}>
                  <NavLink
                    active={key == active}
                    onClick={() => setActive(key)}
                    label={each_sidebar.label}
                    icon={each_sidebar.icon}
                  />
                </Link>
              ) : (
                <NavLink
                  key={key}
                  active={key == active}
                  onClick={() => setActive(key)}
                  icon={each_sidebar.icon}
                  label={each_sidebar.label}
                  rightSection={<MdChevronRight />}
                >
                  {each_sidebar.children!.map((each_child, child_key) => {
                    return (
                      <Link href={each_child.href} key={child_key}>
                        <NavLink
                          label={each_child.label}
                          icon={each_child.icon}
                        />
                      </Link>
                    );
                  })}
                </NavLink>
              );
            })
          : ''}
      </div>
      <div className="flex h-[80px] items-center justify-center border">
        <Button
          className="w-[75%] bg-blue-600 transition-all hover:bg-blue-900"
          radius={'lg'}
          onClick={logoutHandler}
        >
          Logout
        </Button>
      </div>
    </section>
  );
}

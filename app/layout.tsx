'use client';
import '@/styles/globals.css';
import React from 'react';
//
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
//
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <NotificationsProvider>
          <body>{children}</body>
        </NotificationsProvider>
      </MantineProvider>
    </html>
  );
}

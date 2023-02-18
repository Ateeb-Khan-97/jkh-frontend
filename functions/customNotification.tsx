'use client';

import { showNotification } from '@mantine/notifications';
import { MdCheck, MdClose } from 'react-icons/md';
//
type TitleType = 'Success' | 'Failed';
type PropType = {
  title: TitleType;
  message: string;
};
//
export default function customNotification({ message, title }: PropType) {
  //
  const isSuccess = title == 'Success';
  //
  return showNotification({
    title: title,
    message: message,
    autoClose: 3000,
    disallowClose: true,
    color: isSuccess ? 'green' : 'red',
    icon: isSuccess ? <MdCheck /> : <MdClose />,
  });
}

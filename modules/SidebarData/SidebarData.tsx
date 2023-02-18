'use client';

import React from 'react';
import {
  MdEdit,
  MdHistory,
  MdInventory,
  MdLaptop,
  MdList,
  MdPayment,
  MdReceiptLong,
  MdSettings,
  MdShoppingCart,
  MdShowChart,
} from 'react-icons/md';
import {
  AiFillDollarCircle,
  AiOutlineUserAdd,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { BsBoxSeam } from 'react-icons/bs';
import { TbDashboard, TbReportAnalytics } from 'react-icons/tb';
import { CgInsertAfter } from 'react-icons/cg';
//
type ChildrenType = {
  icon: React.ReactNode;
  label: string;
  href: string;
};
type SidebarDataType = {
  icon: React.ReactNode;
  label: string;
  hasChildren: boolean;
  children?: ChildrenType[];
  href?: string;
};
//
const SidebarData: SidebarDataType[] = [
  {
    icon: <TbDashboard />,
    label: 'Dashboard',
    hasChildren: false,
    href: '/dashboard',
  },
  {
    icon: <MdLaptop />,
    label: 'POS',
    hasChildren: false,
    href: '/dashboard/pos',
  },
  {
    icon: <MdInventory />,
    label: 'Inventory',
    hasChildren: true,
    children: [
      {
        icon: <CgInsertAfter />,
        label: 'Inventory Registration',
        href: '/dashboard/inventory/inventory_registration',
      },
      {
        icon: <MdList />,
        label: 'Inventory Information',
        href: '/dashboard/inventory',
      },
      {
        icon: <TbReportAnalytics />,
        label: 'Inventory Report',
        href: '/dashboard/inventory/inventory_report',
      },
    ],
  },
  {
    icon: <MdShowChart />,
    label: 'Sales',
    hasChildren: true,
    children: [
      {
        label: 'Sales Payments',
        icon: <MdPayment />,
        href: '/dashboard/sales/sales_payment',
      },
      {
        label: 'Sales Information',
        icon: <MdList />,
        href: '/dashboard/sales',
      },
      {
        label: 'Sales Pay Information',
        icon: <MdList />,
        href: '/dashboard/sales/sales_pay_information',
      },
      {
        label: 'Sales Detail Reports',
        icon: <TbReportAnalytics />,
        href: '/dashboard/sales/sales_report',
      },
    ],
  },
  {
    icon: <MdShoppingCart />,
    label: 'Purchase',
    hasChildren: true,
    children: [
      {
        label: 'Purchase Registration',
        icon: <CgInsertAfter />,
        href: '/dashboard/purchase/purchase_register',
      },
      {
        label: 'Purchase Edit',
        icon: <MdEdit />,
        href: '/dashboard/purchase/purchase_edit',
      },
      {
        label: 'Purchase Pay',
        icon: <MdPayment />,
        href: '/dashboard/purchase/purchase_pay',
      },
      {
        label: 'Purchase Information',
        icon: <MdList />,
        href: '/dashboard/purchase',
      },
      {
        label: 'Purchase Order Report',
        icon: <TbReportAnalytics />,
        href: '/dashboard/purchase/purchase_order_report',
      },
      {
        label: 'Purchase Detail Report',
        icon: <TbReportAnalytics />,
        href: '/dashboard/purchase/purchase_detail_report',
      },
    ],
  },
  {
    icon: <AiFillDollarCircle />,
    label: 'Expense',
    hasChildren: true,
    children: [
      {
        label: 'Expense Category',
        icon: <BiCategory />,
        href: '/dashboard/expense/expense_category',
      },
      {
        label: 'Expense',
        icon: <MdList />,
        href: '/dashboard/expense',
      },
      {
        label: 'Expense Report',
        icon: <TbReportAnalytics />,
        href: '/dashboard/expense/expense_report',
      },
    ],
  },
  {
    icon: <BsBoxSeam />,
    label: 'Product',
    hasChildren: true,
    children: [
      {
        label: 'Product Register',
        icon: <CgInsertAfter />,
        href: '/dashboard/product/product_register',
      },
      {
        label: 'Product List',
        icon: <MdList />,
        href: '/dashboard/product',
      },
    ],
  },
  {
    icon: <MdReceiptLong />,
    label: 'Return Order',
    hasChildren: true,
    children: [
      {
        label: 'Return Order',
        icon: <MdList />,
        href: '/dashboard/return_order',
      },
      {
        label: 'Return Order Log',
        icon: <MdHistory />,
        href: '/dashboard/return_order/return_order_log',
      },
    ],
  },
  {
    icon: <MdSettings />,
    label: 'Settings',
    hasChildren: true,
    children: [
      {
        label: 'Customer Registration',
        icon: <AiOutlineUsergroupAdd />,
        href: '/dashboard/customer_registration',
      },
      {
        label: 'Supplier Registration',
        icon: <AiOutlineUserAdd />,
        href: '/dashboard/supplier_registration',
      },
      {
        label: 'Dollar Registration',
        icon: <AiFillDollarCircle />,
        href: '/dashboard/dollar_registration',
      },
      {
        label: 'User Registration',
        icon: <AiOutlineUserAdd />,
        href: '/dashboard/user_registration',
      },
    ],
  },
];
//
export default SidebarData;

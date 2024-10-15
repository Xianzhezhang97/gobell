import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

// Static Imports
import Footer from './Footer';
import Logo from './Logo';
import Money from './Money';
import Placeholder from './Placeholder';
import ReturnBtn from './returnBtn';
import StickyTab from './stickyTab';
import SucessSVG from './sucessSVG';
import TopBg from './TopBg';
import staticData from '@/components/staticData.json';
import GlobalNotification from './GlobalNotification';

// TypeScript: Function to ensure a minimum delay with proper typing
const withMinDelay = <T extends unknown>(
  promise: Promise<T>,
  delay: number,
): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(promise);
    }, delay);
  });
};

// Dynamic Imports with Suspense and a minimum loading time of 0.5s
const AccountBG = dynamic(() => withMinDelay(import('./accountBG'), 500), {
  suspense: true,
});
const AccountPannel = dynamic(
  () => withMinDelay(import('./accountPannel'), 500),
  { suspense: true },
);
const CardPolicy = dynamic(() => withMinDelay(import('./CardPolicy'), 500), {
  suspense: true,
});
const CardApply = dynamic(() => withMinDelay(import('./CardApply'), 500), {
  suspense: true,
});
const HomeTabBar = dynamic(() => withMinDelay(import('./HomeTabBar'), 500), {
  suspense: true,
});
const HomePannel = dynamic(() => withMinDelay(import('./HomePannel'), 500), {
  suspense: true,
});
const InputEdit = dynamic(() => withMinDelay(import('./inputEdit'), 500), {
  suspense: true,
});
const Login = dynamic(() => withMinDelay(import('./login/Login'), 500), {
  suspense: true,
});
const OptLogin = dynamic(() => withMinDelay(import('./login/optLogin'), 500), {
  suspense: true,
});
const OrderDetail = dynamic(() => withMinDelay(import('./OrderDetail'), 500), {
  suspense: true,
});
const OrderPannel = dynamic(() => withMinDelay(import('./orderPannel'), 500), {
  suspense: true,
});
const PaymentMethod = dynamic(
  () => withMinDelay(import('./PaymentMethod'), 500),
  { suspense: true },
);
const Signup = dynamic(() => withMinDelay(import('./Signup'), 500), {
  suspense: true,
});
const ShopSelector = dynamic(
  () => withMinDelay(import('./ShopSelector'), 500),
  { suspense: true },
);
const UserCard = dynamic(() => withMinDelay(import('./card/userCard'), 500), {
  suspense: true,
});
const UserPaymentSummary = dynamic(
  () => withMinDelay(import('./userPaymentSummary'), 500),
  { suspense: true },
);
const VoucherList = dynamic(() => withMinDelay(import('./Voucher'), 500), {
  suspense: true,
});
const OrderItem = dynamic(() => withMinDelay(import('./OrderItem'), 500), {
  suspense: true,
});
const Avatar = dynamic(() => withMinDelay(import('./avatar'), 500), {
  suspense: true,
});
const Transaction = dynamic(() => withMinDelay(import('./Transaction'), 500), {
  suspense: true,
});

// Components Object with TypeScript
const components = {
  AccountBG,
  AccountPannel,
  Footer,
  HomeTabBar,
  InputEdit,
  Login,
  Logo,
  Money,
  OptLogin,
  OrderDetail,
  OrderItem,
  OrderPannel,
  PaymentMethod,
  Placeholder,
  ReturnBtn,
  Signup,
  StickyTab,
  SucessSVG,
  TopBg,
  UserCard,
  UserPaymentSummary,
  VoucherList,
  staticData,
  HomePannel,
  ShopSelector,
  GlobalNotification,
  CardApply,
  Avatar,
  Transaction,
  CardPolicy,
};

export default components;

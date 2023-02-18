'use client';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import customNotification from 'functions/customNotification';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
//
import React from 'react';
//
export default function LoginPage() {
  const router = useRouter();
  const userNameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const loginBtnRef = React.useRef<HTMLButtonElement>(null);
  //
  function submitHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    loginBtnRef.current!.disabled = true;
    //
    const user_name = userNameRef.current!.value;
    const password = passwordRef.current!.value;
    //
    if (user_name == '' && password == '') {
      loginBtnRef.current!.disabled = false;
      return customNotification({
        message: 'User Name and Password cannot be empty!',
        title: 'Failed',
      });
    }
    //
    if (user_name == 'adminjk' && password == '5640jk') {
      //
      setCookie('token', 'success', { secure: false });
      //
      customNotification({
        message: 'Successfully Login, Please wait!',
        title: 'Success',
      });
      userNameRef.current!.value = '';
      passwordRef.current!.value = '';
      router.push('/dashboard');
      return;
    }
    //
    customNotification({ message: 'Invalid Credentials!', title: 'Failed' });
    loginBtnRef.current!.disabled = false;
  }
  //
  return (
    <>
      <section className="flex h-screen w-screen overflow-hidden">
        <div className="flex h-[100%] w-[50%] flex-col items-center justify-center gap-6 p-5">
          <div className="flex w-[500px] max-w-[95%] flex-col gap-2">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-600">Access our Dashboard!</p>
          </div>
          <form
            onSubmit={submitHandler}
            className="flex w-[500px] max-w-[95%] flex-col gap-5"
          >
            <TextInput
              ref={userNameRef}
              name="login_user_name"
              placeholder="Enter your user name"
              label="User Name"
              radius="lg"
              withAsterisk
            />
            <PasswordInput
              ref={passwordRef}
              name="login_password"
              placeholder="Enter your password"
              label="Password"
              radius="lg"
              withAsterisk
            />
            <Button
              ref={loginBtnRef}
              className="bg-blue-600 transition-all hover:bg-blue-900"
              type={'submit'}
              radius="lg"
            >
              Login
            </Button>
          </form>
        </div>
        <div className="h-[100%] w-[50%] bg-blue-600" />
      </section>
    </>
  );
}

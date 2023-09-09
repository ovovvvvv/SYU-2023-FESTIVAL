import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <section className=" flex flex-col w-full max-w-[500px] h-screen overflow-y-scroll custom-scrollbar-style">
      {props.children}
    </section>
  );
};

export default Layout;

import React from "react";
import Header from "./Header";
import LenisProvider from "./LenisProvider";
import ClientOnly from "./ClientOnly";
import { ViewTransitions } from "next-view-transitions";
import Footer from "./Footer";
import Cursor from "./Cursor";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ClientOnly>
      <ViewTransitions>
        <LenisProvider>
          <Cursor />
          <Header />
          <main className='bg-background min-h-dvh mix-blend-difference'>{children}</main>
          <Footer />
        </LenisProvider>
      </ViewTransitions>
    </ClientOnly>
  );
};

export default Layout;

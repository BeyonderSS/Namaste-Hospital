import Header from "@/components/Header";
import "@/styles/globals.css";
import { SessionProvider, useSession } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />{" "}
    </SessionProvider>
  );
}

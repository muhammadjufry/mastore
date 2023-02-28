"use client"
import "./styles/globals.css";
import { useEffect, useState } from "react"
import Loader from "./components/Loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const handleLoad = () => {
    setLoading(false);
  };

  const handleUnload = () => {
    setLoading(true);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', handleLoad);
      window.addEventListener('beforeunload', handleUnload);
    }
  }, [])
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      {loading === true ? (
        <div style={{padding: "10px", height: "100vh", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", position: "fixed", width: "100%"}}><Loader /></div>
      ) : children}
      </body>
    </html>
  );
}

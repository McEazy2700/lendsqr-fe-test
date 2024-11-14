"use client";

import loginAtom from "@/state/atoms/loginAtom";
import { useAtomValue } from "jotai";
import React from "react";

export default function Home() {
  const isLoggedIn = useAtomValue(loginAtom);

  React.useEffect(() => {
    if (!isLoggedIn) {
      window.location.replace("/login");
    }
  }, [isLoggedIn]);
  return <div />;
}

"use client";

import React from "react";
import { Provider } from "jotai";

interface Props {
  children?: React.ReactNode;
}

const JotaiProvider: React.FC<Props> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default JotaiProvider;

"use client";
import { CookiesProvider } from "next-client-cookies";
import React from "react";

export const ClientCookiesProvider: typeof CookiesProvider = ({
  children,
  ...props
}) => {
  return <ClientCookiesProvider {...props}>{children}</ClientCookiesProvider>;
};

export default ClientCookiesProvider;

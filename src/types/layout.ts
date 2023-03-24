import { NextPage } from "next";
import { AppProps } from "next/app";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
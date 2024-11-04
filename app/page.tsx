import type { Metadata } from "next";
import Home from "./components/Home";

export default function IndexPage() {
  return <Home />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};

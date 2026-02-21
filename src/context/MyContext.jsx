import { createContext } from "react";

export const ContextProvider = createContext();

export default function MyContext({ children }) {
  const data = {};
  return <ContextProvider value={data}>{children}</ContextProvider>;
}

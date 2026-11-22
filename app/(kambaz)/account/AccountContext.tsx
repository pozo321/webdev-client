"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import usersJson from "../database/users.json";
import * as client from "./client";

export type User = (typeof usersJson)[number];

export const emptyUser: User = {
  _id: "",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "STUDENT",
  loginId: "",
  section: "",
  lastActivity: "",
  totalActivity: "",
};

type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  sessionChecked: boolean;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [sessionChecked, setSessionChecked] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const currentUser = await client.profile();
        setCurrentUser(currentUser);
      } catch {
        setCurrentUser(null);
      }
      setSessionChecked(true);
    };
    fetchProfile();
  }, []);

  return (
    <AccountContext.Provider value={{ currentUser, setCurrentUser, sessionChecked }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}

"use client";
import { createContext, ReactNode } from "react";

type AuthContextValue = {
  user: User;
};

export enum Role {
  Admin,
  User,
}

type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};
export function AuthProvider({ children }: AuthProviderProps) {
  const user: User = {
    id: "1",
    name: "John Doe",
    email: "johndoe@johndoe.com",
    role: Role.User,
  };

  const values: AuthContextValue = { user };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

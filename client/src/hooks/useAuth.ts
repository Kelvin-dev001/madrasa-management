import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  function login(name: string) {
    setUser({ name });
  }

  function logout() {
    setUser(null);
  }

  return { user, login, logout };
}
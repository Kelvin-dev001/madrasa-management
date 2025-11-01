export function login(username: string, password: string): Promise<boolean> {
  // Placeholder: replace with API call
  return Promise.resolve(username === "admin" && password === "password");
}

export function logout(): void {
  // Placeholder: implement logout logic
}
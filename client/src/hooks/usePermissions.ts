export function usePermissions(role: string) {
  // Example: implement permission logic based on role
  return {
    canViewDashboard: role === "admin" || role === "teacher",
    canEditStudents: role === "admin",
    // Add more permissions as needed
  };
}
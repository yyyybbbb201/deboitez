export const ADMIN_PASSWORD = "deboitez2024admin" // Change this to your preferred password

export function checkAdminAuth(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem("admin_authenticated") === "true"
}

export function setAdminAuth(authenticated: boolean): void {
  if (typeof window === "undefined") return
  if (authenticated) {
    localStorage.setItem("admin_authenticated", "true")
  } else {
    localStorage.removeItem("admin_authenticated")
  }
}

export function logout(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem("admin_authenticated")
}

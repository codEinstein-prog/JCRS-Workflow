export function isAdminOrManager(roles) {
  return roles.includes('ADMIN') || roles.includes('MANAGER')
}
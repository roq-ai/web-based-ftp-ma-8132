const mapping: Record<string, string> = {
  companies: 'company',
  'ftp-accounts': 'ftp_account',
  invitations: 'invitation',
  members: 'member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

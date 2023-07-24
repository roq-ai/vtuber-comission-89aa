interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Team Member', 'Content Creator'],
  tenantName: 'Organization',
  applicationName: 'VTuber Comission website',
  addOns: ['chat', 'notifications', 'file'],
};

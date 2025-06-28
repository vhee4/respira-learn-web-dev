export interface User {
  id?: string;
  token?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  level?: string;
  username?: string;
  dob?: string;
  funFact?: string;
  workAnniversary?: string;
  organization?: string;
  displayPictureUrl?: string;
  userId?: string;
  organizationId?: string;
  profile?: any;
  role?: string;
  timezone?: string;
}

export interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ChangeUserPassword {
  oldPassword: string;
  newPassword: string;
}

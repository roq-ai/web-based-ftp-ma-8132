import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  status: string;
  company_id: string;
  invited_user_id: string;
  inviter_user_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user_invitation_invited_user_idTouser?: UserInterface;
  user_invitation_inviter_user_idTouser?: UserInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  company_id?: string;
  invited_user_id?: string;
  inviter_user_id?: string;
}

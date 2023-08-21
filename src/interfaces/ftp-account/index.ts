import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface FtpAccountInterface {
  id?: string;
  username: string;
  password: string;
  server: string;
  port: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface FtpAccountGetQueryInterface extends GetQueryInterface {
  id?: string;
  username?: string;
  password?: string;
  server?: string;
  company_id?: string;
}

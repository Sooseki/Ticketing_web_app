export interface user {
  id: number;
  first_name: string;
  last_name: string;
  token: string;
  role: number;
}

export interface ticket {
  id: number; 
  opening_date: Date; 
  closing_date: Date | null;
  status: number;
  description: string;
  theme: string;
}
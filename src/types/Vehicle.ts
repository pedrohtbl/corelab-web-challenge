import { IUser } from "./User";

export interface IVehicle{
  id?: string;
  name: string;
  model: string;
  color: string;
  description: string;
  plate: string;
  year: number;
  price: number;
  created_at?: Date;
  user?: IUser;
}

export interface IUpdatedVehicle{
  id?: string;
  name?: string;
  model?: string;
  color?: string;
  description?: string;
  plate?: string;
  year?: number;
  price?: number;
  created_at?: Date;
  user?: IUser;
}

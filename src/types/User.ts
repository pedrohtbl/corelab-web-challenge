import { IVehicle } from "./Vehicle";

export interface IUser{
  id: string;
  name: string;
  email: string;
  created_at: Date;
  vehicles: IVehicle[]
  favorite_vehicles: IVehicle[]
}
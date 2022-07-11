import { IVehicle } from "./Vehicle";

export interface IModal{
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  vehicle?: IVehicle;
  vehicles?: IVehicle[];
}

export interface IModalSelect{
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  vehicles: IVehicle[];
  setFilterVehiclesModal: React.Dispatch<React.SetStateAction<IVehicle[]>>;
}
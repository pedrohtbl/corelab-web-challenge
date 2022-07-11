import { ReactNode } from "react";
import { RegisterOptions } from "react-hook-form";
import { RestTypeNode } from "typescript";

export interface IInput{
  label: string;
  errors: any;
  name: string;
  register: any
}

export interface ISelect{
  label: string;
  name: string;
  register: any
  children: ReactNode
}
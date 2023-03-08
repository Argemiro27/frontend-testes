import { HTMLProps } from "react";

export interface IContent extends HTMLProps<HTMLElement>{
  children: React.ReactNode
}
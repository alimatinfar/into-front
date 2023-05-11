import {ReactNode} from "react";

export type Types = {
  children: ReactNode;
}

export type SetStateType<T> =  React.Dispatch<React.SetStateAction<T>>
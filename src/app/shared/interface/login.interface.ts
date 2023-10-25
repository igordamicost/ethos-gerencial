import { EmpresaInterface } from "./empresa.interface";
import { UserInterface } from "./user.interface";

export interface LoginRequest {
    email: string;
    password: string;
}
export interface LoginResponse {
    token: string;
    empresa: EmpresaInterface;
    user: UserInterface;
}

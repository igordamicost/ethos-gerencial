import { LicencaInterface } from "./licenca.interface";

export interface UserInterface {
    id: number;
    nome: string;
    email: string;
    password: string;
    empresa: number;
    status: boolean;
    licenca: LicencaInterface;
}

import { LicencaInterface } from "./licenca.interface";

export interface EmpresaInterface {
    id: number;
    nome: string;
    cnpj: string;
    email: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
    licenca: LicencaInterface;
    renovacao: Date;
    status: boolean;
}

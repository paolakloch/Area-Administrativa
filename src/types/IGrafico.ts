import { IconTypeMap } from "@mui/material";
import IProfissional from "./IProfissional";
import IConsulta from "./IConsulta";

export default interface IGrafico {
  profissionais: IProfissional[]  | null;
  consultas: IConsulta[] | null;
}

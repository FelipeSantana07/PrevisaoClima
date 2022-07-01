import { IPrevisao } from './IPrevisao.model';

/* eslint-disable @typescript-eslint/naming-convention */

export interface IResposta{
  by: string;
  execution_time: number;
  from_cache: boolean;
  results: IPrevisao;
  valid_key: boolean;
}

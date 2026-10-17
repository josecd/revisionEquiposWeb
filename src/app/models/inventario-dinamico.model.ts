export interface InventarioGrupo {
  id: string;
  nombre: string;
  descripcion?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ArticuloDinamico {
  id: string;
  inventarioGrupoId: string;
  atributos: Record<string, any>;
  stockActual: number;
  createdAt: string;
  updatedAt: string;
}

export enum TipoMovimientoDinamico {
  IN = 'IN',
  OUT = 'OUT',
  ADJUST = 'ADJUST',
  MODIFICACION_ATRIBUTOS = 'MODIFICACION_ATRIBUTOS',
}

export interface MovimientoDinamico {
  id: string;
  articuloId: string;
  tipo: TipoMovimientoDinamico;
  cantidad: number;
  stockResultante: number;
  motivo?: string;
  metadata?: Record<string, any>;
  createdAt: string;
}

export interface CreateInventarioGrupoDto {
  nombre: string;
  descripcion?: string;
}

export interface CreateArticuloDinamicoDto {
  inventarioGrupoId: string;
  atributos: Record<string, any>;
}

export interface CreateMovimientoDinamicoDto {
  tipo: TipoMovimientoDinamico;
  cantidad: number;
  motivo?: string;
  metadata?: Record<string, any>;
}

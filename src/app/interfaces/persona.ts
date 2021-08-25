export interface Persona {
    id?: string;
    n_cedula?: string;
    primer_nombre?: string;
    segundo_nombre?: string;
    apellidos?: string;
    direccion?: string;
    telefono?: string;
    ciudad?: string;
    id_clasificacion?: string;
    estado?: string;
    /** relacion con clasificacion */
    clasificacion?: {
        id?: string;
        clasificacion?: string;
    }
}

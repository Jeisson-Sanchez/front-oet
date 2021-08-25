export interface Vehiculo {
    placa?: string;
    color?: string;
    marca?: string;
    id_tipo_vehiculo?: string;
    id_conductor?: string;
    id_propietario?: string;
    estado?: string;
    conductor?: {
        id?: string;
        n_cedula?: string;
        primer_nombre?: string;
        segundo_nombre?: string;
        apellidos?: string;
    };
    propietario?: {
        id?: string;
        n_cedula?: string;
        primer_nombre?: string;
        segundo_nombre?: string;
        apellidos?: string;
    };
    tipo_vehiculo?: {
        id?: string;
        tipo?: string;
    }

}

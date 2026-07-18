/**
 * CAPA DE DOMINIO - PUERTO (PORT)
 * Definimos el contrato de búsqueda para obtener los datos de los juegos.
 */

import { Game } from "../entities/game.entity";

export interface GameFilter {
    date: Date;
    team?: string; // El signo '?' lo hace opcional
}

export interface GameRepository {
    /** 
     * Busca juegos basados en un filtro. 
     * Si solo viene la fecha, trae la jornada completa. 
     * Si viene con equipo, filtra ese partido en específico.
     */
    find(filter: GameFilter): Promise<Game[]>;
}
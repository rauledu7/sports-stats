/**
 * ENTIDAD DE DOMINIO: ESTADISTICAS DEL JUEGO DEL DIA
 * Ajustada para manejar estadisticas e información del juego del dia.
 */

import { PitcherStats } from "./pitcher-stats.entity";

export class Game {
    constructor(
        public readonly id: string,
        public readonly date: Date,
        public readonly homeTeam: string,
        public readonly awayTeam: string,
        public readonly homeTeamScore: number,
        public readonly awayTeamScore: number,
        public readonly homeTeamPitcher: PitcherStats | null,
        public readonly awayTeamPitcher: PitcherStats | null,
    ) {
        this.validate();
    }

    private validate(): void {
        if (this.date < new Date()) {
            throw new Error('La fecha no puede ser menor a la fecha actual');
        }
        if (this.homeTeamScore < 0) {
            throw new Error('El puntaje del equipo local no puede ser menor a 0');
        }
        if (this.awayTeamScore < 0) {
            throw new Error('El puntaje del equipo visitante no puede ser menor a 0');
        }
    }
}
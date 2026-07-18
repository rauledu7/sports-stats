/**
 * ENTIDAD DE DOMINIO: ESTADISTICAS DEL PITCHER
 * Ajustada para manejar estadisticas del pitcher como datos directos.
 */

export class PitcherStats {
    constructor(
        public readonly id: string,
        public readonly pitcherId: string,
        public readonly pitcherName: string,
        public readonly teamId: string,
        public readonly teamName: string,   
        public readonly teamLogo: string,
        public readonly games: number,
        public readonly innings: number,
        public readonly wins: number,
        public readonly losses: number,
        public readonly saves: number,
        public readonly era: number,
        public readonly whip: number,
        public readonly strikeouts: number,
        public readonly k9: number,
        public readonly bb9: number,
        public readonly babip: number,
        public readonly xfip: number,
        public readonly fip: number,
        public readonly ground_balls_percentage: number,
        public readonly xera: number,
        public readonly war: number
    ) {
        this.validate();
    }

    private validate(): void {
        if (this.games < 0) {
            throw new Error('Los juegos no pueden ser menores a 0');
        }
        if (this.innings < 0) {
            throw new Error('Las entradas no pueden ser menores a 0');
        }
        if (this.wins < 0) {
            throw new Error('Las victorias no pueden ser menores a 0');
        }
        if (this.losses < 0) {
            throw new Error('Las derrotas no pueden ser menores a 0');
        }
        if (this.saves < 0) {
            throw new Error('Los salvados no pueden ser menores a 0');
        }
        if (this.era < 0) {
            throw new Error('El ERA no puede ser menor a 0');
        }
        if (this.whip < 0) {
            throw new Error('El WHIP no puede ser menor a 0');
        }
        if (this.strikeouts < 0) {
            throw new Error('Las strikeouts no pueden ser menores a 0');
        }
        if (this.k9 < 0) {
            throw new Error('El K9 no puede ser menor a 0');
        }
        if (this.bb9 < 0) {
            throw new Error('El BB9 no puede ser menor a 0');
        }
        if (this.babip < 0) {
            throw new Error('El BABIP no puede ser menor a 0');
        }
        if (this.xfip < 0) {
            throw new Error('El XFIP no puede ser menor a 0');
        }
        if (this.fip < 0) {
            throw new Error('El FIP no puede ser menor a 0');
        }
        if (this.ground_balls_percentage < 0) {
            throw new Error('El porcentaje de ground balls no puede ser menor a 0');
        }
        if (this.xera < 0) {
            throw new Error('El XERA no puede ser menor a 0');
        }
        if (this.games > 162) {
            throw new Error('Los juegos no pueden ser mayores a 162');
        }
        if (this.innings > 300) {
            throw new Error('Las entradas no pueden ser mayores a 300');
        }
        if (this.wins > 162) {
            throw new Error('Las victorias no pueden ser mayores a 162');
        }
        if (this.losses > 162) {
            throw new Error('Las derrotas no pueden ser mayores a 162');
        }
    }
}
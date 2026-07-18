/**
 * CAPA DE INFRAESTRUCTURA - ADAPTADOR DE PERSISTENCIA (MOCK)
 * Simula una base de datos en memoria RAM usando las entidades del dominio.
 */

import { GameFilter, GameRepository } from "../../domain/repositories/game.repository";
import { Game } from "../../domain/entities/game.entity";
import { PitcherStats } from "../../domain/entities/pitcher-stats.entity";
import { formatDate } from "src/common/utils/date.utils";

export class MockGameRepository implements GameRepository {
    // 1. Nuestra base de datos falsa (Array privado en memoria)
    // 1. Nuestra base de datos falsa (Array privado en memoria) con la nueva estructura
    private readonly gamesDatabase: Game[] = [
        // PARTIDO 1: Phillies vs Marlins
        new Game(
            "game_001",
            new Date("2026-07-18"),
            "Philadelphia Phillies",
            "Miami Marlins",
            0,
            0,
            // Abridor Local: Zack Wheeler (Estadísticas de Élite)
            new PitcherStats(
                "stats_001",               // id
                "p_wheeler_01",            // pitcherId
                "Zack Wheeler",            // pitcherName
                "team_phi_01",             // teamId
                "Philadelphia Phillies",   // teamName
                "https://logos.mlb.com/phi.png", // teamLogo
                18, 115, 10, 4, 0,         // games, innings, wins, losses, saves
                2.70, 0.98, 135,           // era, whip, strikeouts
                10.5, 1.8, .260,           // k9, bb9, babip
                2.95, 2.80, 45.2, 2.85, 4.2 // xfip, fip, ground_balls_percentage, xera, war
            ),
            // Abridor Visitante: Pitcher en problemas / vulnerable
            new PitcherStats(
                "stats_002",
                "p_marlins_abridor",
                "John Doe",
                "team_mia_02",
                "Miami Marlins",
                "https://logos.mlb.com/mia.png",
                15, 70, 3, 8, 0,
                4.85, 1.42, 55,
                7.1, 3.5, .315,
                4.60, 4.75, 38.0, 4.90, 0.5
            )
        ),

        // PARTIDO 2: Yankees vs Red Sox
        new Game(
            "game_002",
            new Date("2026-07-18"),
            "New York Yankees",
            "Boston Red Sox",
            0,
            0,
            // Abridor Yankees: Gerrit Cole (Estadísticas Sólidas)
            new PitcherStats(
                "stats_003",
                "p_cole_01",
                "Gerrit Cole",
                "team_nyy_03",
                "New York Yankees",
                "https://logos.mlb.com/nyy.png",
                12, 68, 6, 3, 0,
                3.20, 1.10, 80,
                10.6, 2.1, .285,
                3.10, 3.15, 42.0, 3.30, 2.1
            ),
            // Abridor Red Sox: Tanner Houck (Estadísticas Buenas/Estables)
            new PitcherStats(
                "stats_004",
                "p_houck_01",
                "Tanner Houck",
                "team_bos_04",
                "Boston Red Sox",
                "https://logos.mlb.com/bos.png",
                17, 102, 8, 6, 0,
                3.40, 1.15, 98,
                8.6, 2.4, .275,
                3.50, 3.35, 52.5, 3.45, 2.8
            )
        )
    ];

    // 2. El método del contrato que busca y filtra los datos
    async find(filter: GameFilter): Promise<Game[]> {
        // Convertimos la fecha del filtro a formato YYYY-MM-DD para comparar solo el día
        const filterDateStr = formatDate(filter.date);

        // Filtramos nuestro array usando lógica pura de TypeScript
        const results = this.gamesDatabase.filter(game => {
            const gameDateStr = formatDate(game.date);

            // Regla 1: Debe coincidir la fecha obligatoriamente
            const matchesDate = gameDateStr === filterDateStr;

            // Regla 2: Si viene el filtro de equipo, debe ser el local o el visitante
            let matchesTeam = true;
            if (filter.team) {
                const searchTeam = filter.team.toLowerCase();
                matchesTeam = game.homeTeam.toLowerCase().includes(searchTeam) ||
                    game.awayTeam.toLowerCase().includes(searchTeam);
            }

            return matchesDate && matchesTeam;
        });

        return results;
    }
}
/**
 * CAPA DE APLICACIÓN - CASO DE USO (ORQUESTADOR)
 * Caso de uso para obtener los juegos del dia.
 */

import { GameRepository } from "../../domain/repositories/game.repository";
import { Game } from "../../domain/entities/game.entity";
import { GameFilter } from "../../domain/repositories/game.repository";

export class GetDailyGamesUseCase {
    constructor(private readonly gameRepository: GameRepository) {}

    async execute(filter: GameFilter): Promise<Game[]> {
        return this.gameRepository.find(filter);
    }
}
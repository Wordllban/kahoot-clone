import { writable, type Writable } from "svelte/store";
import type { Player, QuizQuestion } from "../../models/quiz";
import {
  GameState,
  NetService,
  PacketTypes,
  type ChangeGameStatePacket,
  type HostGamePacket,
  type Packet,
  type PlayerJoinPacket,
  type QuestionShowPacket,
  type TickPacket,
} from "../net";

export const hostGameState: Writable<GameState> = writable(GameState.Lobby);
export const players: Writable<Player[]> = writable([]);
export const tick: Writable<number> = writable(0);
export const currentQuestion: Writable<QuizQuestion | null> = writable(null);

export class HostGame {
  private net: NetService;

  constructor() {
    this.net = new NetService();
    this.net.connect();
    this.net.onPacket((p) => this.onPacket(p));
  }

  start() {
    this.net.sendPacket({ id: PacketTypes.StartGame });
  }

  hostQuiz(quizId: string) {
    const packet: HostGamePacket = {
      id: PacketTypes.HostGame,
      quizId,
    };

    this.net.sendPacket(packet);
  }

  onPacket(packet: Packet) {
    switch (packet.id) {
      case PacketTypes.ChangeGameState: {
        const data = packet as ChangeGameStatePacket;
        hostGameState.set(data.state);
        break;
      }
      case PacketTypes.PlayerJoin: {
        const data = packet as PlayerJoinPacket;
        players.update((p) => [...p, data.player]);
        break;
      }
      case PacketTypes.Tick: {
        const data = packet as TickPacket;
        tick.set(data.tick);
        break;
      }
      case PacketTypes.QuestionShow: {
        const data = packet as QuestionShowPacket;
        currentQuestion.set(data.question);
        break;
      }
    }
  }
}

import { writable, type Writable } from "svelte/store";
import type { Player } from "../../models/quiz";
import {
  GameState,
  NetService,
  PacketTypes,
  type ChangeGameStatePacket,
  type HostGamePacket,
  type Packet,
  type PlayerJoinPacket,
} from "../net";

export const hostGameState: Writable<GameState> = writable(GameState.Lobby);
export const players: Writable<Player[]> = writable([]);

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
    }
  }
}

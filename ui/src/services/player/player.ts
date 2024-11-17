import { writable, type Writable } from "svelte/store";
import {
  GameState,
  NetService,
  PacketTypes,
  type ChangeGameStatePacket,
  type ConnectPacket,
  type Packet,
  type QuestionAnswerPacket,
} from "../net";

export const playerGameState: Writable<GameState> = writable(GameState.Lobby);
export class PlayerGame {
  private net: NetService;

  constructor() {
    this.net = new NetService();
    this.net.connect();
    this.net.onPacket((p) => this.onPacket(p));
  }

  join(code: string, name: string) {
    const packet: ConnectPacket = {
      id: PacketTypes.Connect,
      code,
      name,
    };

    this.net.sendPacket(packet);
  }

  answer(question: number) {
    const packet: QuestionAnswerPacket = {
      id: PacketTypes.Answer,
      question,
    };

    this.net.sendPacket(packet);
  }

  onPacket(packet: Packet) {
    switch (packet.id) {
      case PacketTypes.ChangeGameState: {
        const data = packet as ChangeGameStatePacket;
        playerGameState.set(data.state);
        break;
      }
    }
  }
}

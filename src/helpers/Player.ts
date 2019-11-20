import Axios, { AxiosInstance } from 'axios';
import { Room } from './Room';
import { directive } from '@babel/types';

export class Player {
  cooldown: number;
  AxiosAuth: AxiosInstance;
  items = [];
  public currentRoom: Room;
  BASE_URL = 'https://lambda-treasure-hunt.herokuapp.com/api';
  constructor(public name: string, public token: string) {
    this.AxiosAuth = Axios.create({
      headers: {
        Authorization: `Token ${token}`
      }
    });
    this.cooldown = 0;
    this.currentRoom = new Room({});
  }

  public async initGame() {
    try {
      const room = await this.AxiosAuth.get(`${this.BASE_URL}/adv/init/`);
      this.currentRoom = new Room(room.data);
      this.cooldown = room.data.cooldown;
    } catch (error) {
      console.log(error);
    }
  }
  public async move(dir: string, next: number) {
    try {
      const room = await this.AxiosAuth.post(`${this.BASE_URL}/adv/move/`, {
        direction: dir,
        next_room_id: next
      });
      this.currentRoom = new Room(room.data);
      this.cooldown = room.data.cooldown;
    } catch (error) {
      console.log(error);
    }
  }
  public async pickTreasure() {
    try {
      const treasure = await this.AxiosAuth.post(`${this.BASE_URL}/adv/take/`, {
        name: 'treasure'
      });
      console.log(treasure);
    } catch (error) {
      console.log(error);
    }
  }
  public async dropTreasure() {
    try {
      const treasure = await this.AxiosAuth.post(`${this.BASE_URL}/adv/drop/`, {
        name: 'treasure'
      });
      console.log(treasure);
    } catch (error) {
      console.log(error);
    }
  }
}
